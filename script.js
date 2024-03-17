var Div1 = document.getElementById("sourceDiv");
var Div2 = document.getElementById("sourceRecipesListDiv");
var Div3 = document.getElementById("calculateDiv");
var Div4 = document.getElementById("ingredientsCalculatedDiv");
var Div5 = document.getElementById("sourceRecipeDiv");
var Div7 = document.getElementById("ingredientCalculatedDiv");


let recipeShort = [];
let recipeUrl = [];
let recipeFull = [];
let sourceName = "";
let recipeId = 0;

function init(recipeName) {
    sourceName = "";
    recipeShort = [];
    recipeUrl = [];
    recipeFull = [];
    Div1.style.display = "none";
    Div2.style.display = "none";
    Div3.style.display = "none";
    Div4.style.display = "none";

    if (recipeName.trim() !== "") {
        Div1.style.display = "flex";
        Div1.scrollIntoView({ behavior: 'smooth' }); 
    }

}

function initEnter(event) {
    if (event.key === "Enter") {
        init(document.getElementById('recipeName').value);
    }
    else if (document.getElementById('recipeName').value === ""){
        init("");
    }
}

async function getListOfRecipesFromSource(recipeName, source) {
    let a = 0;
    sourceName = source;
    Div1.style.display = "none";

    //Div2.innerHTML = '';
    Div2.style.display = "flex"
    Div5.style.display = "block"

    if (recipeShort.length == 0) {
        heading = document.createElement('h3');
        heading.textContent = 'Szukam przepisu...';
        Div5.appendChild(heading);
    }

   if(sourceName.includes("aniagotuje")){
       await getDataFromAniaGotuje(recipeName, "list");
    } else if(sourceName.includes("rozkoszny")){
        await getDataFromRozkoszny(recipeName, "list");
    }
    
    Div5.innerHTML = '';

    if (recipeShort.length == 0) {
        heading = document.createElement('h3');
        heading.textContent = 'Ups... Brak przepisu :(';
        Div5.appendChild(heading);
        return;
    }

    var heading = document.createElement('h3');
    heading.textContent = 'Wybierz przepis:';
    Div5.appendChild(heading);

    for (let i=0; i<recipeShort.length; i++){
        var button = document.createElement("button");
        button.setAttribute('class', 'sourceRecipe-button');
        button.setAttribute('id', i);
        button.addEventListener('click', calculateRecipe, false);
        const newContent = document.createTextNode(recipeShort[i]);
        button.appendChild(newContent);
        Div5.appendChild(button);
    }
}


async function calculateRecipe(evt) {
    //alert(recipeUrl[evt.currentTarget.id]);
    Div1.style.display = "none"
    Div5.innerHTML = ' ...pobieram przepis';

    recipeId = evt.currentTarget.id;
    if(sourceName.includes("aniagotuje")){
        await getDataFromAniaGotuje(recipeName, "full");
     } else if(sourceName.includes("rozkoszny")){
         await getDataFromRozkoszny(recipeName, "full");
     }
    //Div2.innerHTML = recipeShort[recipeId];
    Div2.style.display = "none"
    Div3.style.display = "flex";
}

async function calculateServings(servings) {
    Div2.style.display = "none";
    Div3.style.display = "none"
    //Div4.innerHTML = ''; Zmiana
    Div4.style.display = "flex";
    Div7.style.display = "block";

    for(let i = 0; i < recipeFull.length; i++){
        let lineDiv = document.createElement("div");
        lineDiv.textContent = recipeFull[i] + "x" + servings;
        Div7.appendChild(lineDiv);
    }
    // Div4.textContent = tempData[0] + " x " + servings;
}

function calculateServingsEnter(event) {
    if(event.key === "Enter"){
        calculateServings(document.getElementById('inputServings').value);
    }
}

// ------------------------------------------------------
// parse HTMLs
// ------------------------------------------------------

async function getDataFromAniaGotuje(recipeName, type){
    if(type == "list") {
        let a = 0;
        //await $.get('assets/ania_pierogi.html', function (html) {
        await $.get('https://cors-anywhere.herokuapp.com/https://aniagotuje.pl/szukaj?s='+recipeName, function (html) {
            $(html).find('.article-content').each(function () {
                console.log($(this).text());
                recipeShort[a++] = ($(this).find('h3').text().trim());
                //recipeShort[a++] = ($(this).text());
            });
        });
        a = 0;
        //await $.get('assets/ania_pierogi.html', function (html) {
        await $.get('https://cors-anywhere.herokuapp.com/https://aniagotuje.pl/szukaj?s='+recipeName, function (html) {
            $(html).find('.article-content').each(function () {
                console.log($(this).attr("href"));
                recipeUrl[a++] = $(this).find('a').attr("href");
                console.log(recipeUrl[a - 1]);
            });
        });
    } else {
        let a = 0;
        await $.get("https://cors-anywhere.herokuapp.com/" + recipeUrl[recipeId], function (html) {
        //await $.get('assets/full_'+recipeId+'.html', function (html) {
            $(html).find('.recipe-ing-list').each(function () {
                console.log($(this).text());
                recipeFull[a++] = ($(this).text());
            });
        });
    }

}


async function getDataFromRozkoszny(recipeName, type){
    if(type == "list") {
        let a = 0;
        await $.get('https://cors-anywhere.herokuapp.com/https://rozkoszny.pl/?s='+recipeName, function (html) {
            $(html).find('.elementor-post__title').each(function () {
                //console.log($(this).text());
                recipeShort[a] = ($(this).text().trim());
                //console.log($(this).find('a').attr("href"));
                recipeUrl[a++] = $(this).find('a').attr("href");
            });
        });
    } else {
        let a = 0;
        await $.get("https://cors-anywhere.herokuapp.com/" + recipeUrl[recipeId], function (html) {
            $(html).find('.elementor-widget-container').find('p').each(function () {
                if(++a==4){
                   //console.log($(this).text());
                    recipeFull[0] = ($(this).text());
                }
            });
        });
    }

}
