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

function getRecipeFromSource(recipeName, source) {
    Div2.style.display = "block";
    Div3.style.display = "block"

    for (let i=0; i<tempData.length; i++){
        var div = document.createElement("div");
        div.setAttribute('class', '.ingredients-list');
        const newContent = document.createTextNode(tempData[i]);
        div.appendChild(newContent);
        Div3.appendChild(div);
    }
}

function calculateServings(servings) {
    Div4.style.display = "block";
    Div4.textContent = tempData[0] + " x " + servings;
}

