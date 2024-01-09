var Div1 = document.getElementById("sourceDiv");
var Div2 = document.getElementById("servingsDiv");
var Div3 = document.getElementById("ingredientsDiv");
var Div4 = document.getElementById("ingredientsCalculatedDiv");
//temp
let tempData = [
    ['Pierogi z grzybami', '500 g mąki pszennej np. typ 500','1 szklanka gorącej wody - 250 ml', '4 łyżki oleju roślinnego - 50 ml', 'pół łyżeczki soli'],
    ['Pierogi z kapustą', '700 g mąki pszennej np. typ 500','1 szklanka gorącej wody - 250 ml', '6 łyżki oleju roślinnego - 50 ml', 'pół łyżeczki soli'],
    ['Pierogi z jagodami', '200 g mąki pszennej np. typ 500','1 szklanka gorącej wody - 250 ml', '2 łyżki oleju roślinnego - 50 ml', 'pół łyżeczki soli']
];

function init(recipeName) {
    if (recipeName.trim() !== "") {
        Div1.style.display = "block";
    }
    else {
        Div1.style.display = "none";
        Div2.style.display = "none";
        Div3.style.display = "none";
        Div4.style.display = "none";
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

function getRecipeFromSource(recipeName, source) {
    Div2.style.display = "block";
    Div3.style.display = "block"

    for (let i=0; i<tempData.length; i++){
        var button = document.createElement("button");
        button.setAttribute('class', 'ingredients-list');
        const newContent = document.createTextNode(tempData[i][0]);
        button.appendChild(newContent);
        Div3.appendChild(button);
    }
}

function calculateServings(servings) {
    Div4.style.display = "block";
    for(let i = 0; i < tempData[0].length; i++){
        let lineDiv = document.createElement("div");
        lineDiv.textContent = tempData[0][i];
        Div4.appendChild(lineDiv);
    }
    // Div4.textContent = tempData[0] + " x " + servings;
}

function calculateServingsEnter(event) {
    if(event.key === "Enter"){
        calculateServings(document.getElementById('inputServings').value);
    }
}

