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
    heading = document.createElement('h3');
    heading.textContent = '...pobieram przepis';
    Div5.innerHTML = '';
    Div5.appendChild(heading);

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