function showDiv(value) {
    var Div1 = document.getElementById("sourceDiv");
    var Div2 = document.getElementById("servingsDiv");
    var Div3 = document.getElementById("ingredientsDiv");
    if (value.trim() !== "") {
        Div1.style.display = "block";
        Div2.style.display = "block";
        Div3.style.display = "block";
    } else {
        Div1.style.display = "none";
        Div2.style.display = "none";
        Div3.style.display = "none";
    }
}

function showDivEnter(event) {
    if (event.key === "Enter") {
        showDiv(document.getElementById('fLink').value);
    }
}