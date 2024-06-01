var sourceDiv = document.getElementById("sourceDiv");
var sourceRecipesListDiv = document.getElementById("sourceRecipesListDiv");
var sourceRecipeDiv = document.getElementById("sourceRecipeDiv");
var servingsDiv = document.getElementById("servingsDiv");
var ingredientsCalculatedDiv = document.getElementById("ingredientsCalculatedDiv");
var ingredientCalculatedDiv = document.getElementById("ingredientCalculatedDiv");

let recipeShort = [];
let recipeUrl = [];
let recipeFull = [];
let recipeServingsOrginal = "";
let sourceName = "";
let recipeId = 0;
function init(recipeName) {
    sourceName = "";
    recipeShort = [];
    recipeUrl = [];
    recipeFull = [];
    recipeServingsOrginal = "";
    sourceDiv.style.display = "none";
    sourceRecipesListDiv.style.display = "none";
    servingsDiv.style.display = "none";
    ingredientsCalculatedDiv.style.display = "none";
    ingredientCalculatedDiv.style.display = "none";
    ingredientCalculatedDiv.style.display = '';

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
        button.addEventListener('click', getRecipeFromSource, false);
        const newContent = document.createTextNode(recipeShort[i]);
        button.appendChild(newContent);
        sourceRecipeDiv.appendChild(button);
    }
}


async function getRecipeFromSource(evt) {
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
    sourceRecipesListDiv.style.display = "none"
    servingsDiv.style.display = "flex";
}

async function calculateServings(servings) {
    sourceRecipesListDiv.style.display = "none";
    servingsDiv.style.display = "none"
    
    ingredientsCalculatedDiv.style.display = "flex";
    ingredientCalculatedDiv.style.display = "block";
    
    let heading = document.createElement('h3');
    heading.textContent = 'Przeliczam przepis z Gemini AI ...';
    ingredientCalculatedDiv.innerHTML='';
    ingredientCalculatedDiv.appendChild(heading);

    try{
        result = await getResponseFromGeminiAI(recipeServingsOrginal, servings, recipeFull.toString(), recipeName);
        ingredientCalculatedDiv.textContent = "";
        resultTab = parsedResponse(result);

        let tmp = false;
        for(let i = 0; i < resultTab.length; i++){
            if(resultTab[i] != '' && !tmp){
                tmp = true;
                lineDiv = document.createElement('h2');
            }
            else
            {
                lineDiv = document.createElement("div");
            }
            lineDiv.textContent = resultTab[i];
            lineDiv.classList.add('line');
            ingredientCalculatedDiv.appendChild(lineDiv);
        }
    }catch(error){
        ingredientCalculatedDiv.innerHTML='';
        let heading = document.createElement('h3');
        heading.textContent = 'Ups... Brak połączenia z Gemini AI :(';
        ingredientCalculatedDiv.appendChild(heading);
    }
}

function calculateServingsEnter(event) {
    if(event.key === "Enter"){
        calculateServings(document.getElementById('inputServings').value);
    }
}
