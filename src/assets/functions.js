const fLink = document.getElementById("fLink")
const result_1 = document.getElementById("result_1");
const result_2= document.getElementById("result_2");

fLink.addEventListener("input", validateLink);
fLink.addEventListener("change", getLinkContent);

//TODO add validation for links we are supporting
function validateLink(e) {
    var urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
        '(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator
    if(!!urlPattern.test(fLink.value)){
        fLink.style.color = 'green';
    } else {
        fLink.style.color = 'red';
    }
}
//TODO parse result to get real content, add wait indicator
async function getLinkContent(e) {
    if(fLink.style.color == 'green') {
        result_1.textContent = "loading...";
        result_2.textContent = "loading...";
        var src = await fetch("przyklad.html");//await fetch(fLink.value)
        result_1.textContent = await src.text();

    } else {
        alert('Incorrect url')
    }

}
