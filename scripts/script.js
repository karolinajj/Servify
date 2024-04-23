var sourceDiv = document.getElementById("sourceDiv");
var sourceRecipesListDiv = document.getElementById("sourceRecipesListDiv");
var sourceRecipeDiv = document.getElementById("sourceRecipeDiv");
var servingsDiv = document.getElementById("servingsDiv");
var ingredientsCalculatedDiv = document.getElementById("ingredientsCalculatedDiv");
var ingredientCalculatedDiv = document.getElementById("ingredientCalculatedDiv");

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
    sourceDiv.style.display = "none";
    sourceRecipesListDiv.style.display = "none";
    servingsDiv.style.display = "none";
    ingredientsCalculatedDiv.style.display = "none";

    if (recipeName.trim() !== "") {
        sourceDiv.style.display = "flex";
        sourceDiv.scrollIntoView({ behavior: 'smooth' }); 
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
    sourceDiv.style.display = "none";

    sourceRecipeDiv.innerHTML = '';
    sourceRecipesListDiv.style.display = "flex"
    sourceRecipeDiv.style.display = "block"

    if (recipeShort.length == 0) {
        heading = document.createElement('h3');
        heading.textContent = 'Szukam przepisu...';
        sourceRecipeDiv.appendChild(heading);
    }

   if(sourceName.includes("aniagotuje")){
       await getDataFromAniaGotuje(recipeName, "list");
    } else if(sourceName.includes("rozkoszny")){
        await getDataFromRozkoszny(recipeName, "list");
    } else if(sourceName.includes("kwestia")){
        await getDataFromKwestia(recipeName, "list");
    } else if(sourceName.includes("aniastarmach")){
        await getDataFromAniaStarmach(recipeName, "list");
    }
    
    sourceRecipeDiv.innerHTML = '';

    if (recipeShort.length == 0) {
        heading = document.createElement('h3');
        heading.textContent = 'Ups... Brak przepisu :(';
        sourceRecipeDiv.appendChild(heading);
        return;
    }

    var heading = document.createElement('h3');
    heading.textContent = 'Wybierz przepis:';
    sourceRecipeDiv.appendChild(heading);

    for (let i=0; i<recipeShort.length; i++){
        var button = document.createElement("button");
        button.setAttribute('class', 'sourceRecipe-button');
        button.setAttribute('id', i);
        button.addEventListener('click', calculateRecipe, false);
        const newContent = document.createTextNode(recipeShort[i]);
        button.appendChild(newContent);
        sourceRecipeDiv.appendChild(button);
    }
}


async function calculateRecipe(evt) {
    //alert(recipeUrl[evt.currentTarget.id]);
    sourceDiv.style.display = "none"
    heading = document.createElement('h3');
    heading.textContent = '...pobieram przepis';
    sourceRecipeDiv.innerHTML = '';
    sourceRecipeDiv.appendChild(heading);

    recipeId = evt.currentTarget.id;
    if(sourceName.includes("aniagotuje")){
        await getDataFromAniaGotuje(recipeName, "full");
     } else if(sourceName.includes("rozkoszny")){
         await getDataFromRozkoszny(recipeName, "full");
     } else if(sourceName.includes("kwestia")){
        await getDataFromKwestia(recipeName, "full");
    } else if(sourceName.includes("aniastarmach")){
        await getDataFromAniaStarmach(recipeName, "full");
    }
    //sourceRecipesListDiv.innerHTML = recipeShort[recipeId];
    sourceRecipesListDiv.style.display = "none"
    servingsDiv.style.display = "flex";
}

async function calculateServings(servings) {
    sourceRecipesListDiv.style.display = "none";
    servingsDiv.style.display = "none"
    //ingredientsCalculatedDiv.innerHTML = ''; Zmiana
    ingredientsCalculatedDiv.style.display = "flex";
    ingredientCalculatedDiv.style.display = "block";

    for(let i = 0; i < recipeFull.length; i++){
        let lineDiv = document.createElement("div");
        lineDiv.textContent = recipeFull[i] + " x " + servings;
        ingredientCalculatedDiv.appendChild(lineDiv);
    }
    // ingredientsCalculatedDiv.textContent = tempData[0] + " x " + servings;
}

function calculateServingsEnter(event) {
    if(event.key === "Enter"){
        calculateServings(document.getElementById('inputServings').value);
    }
}
