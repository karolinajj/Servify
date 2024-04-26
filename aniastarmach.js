async function getDataFromAniaStarmach(recipeName, type){
    if(type == "list") {
        let a = 0;
        await $.get('https://cors-anywhere.herokuapp.com/https://aniastarmach.pl/szukaj/typ,przepisy/s,'+recipeName, function (html) {
            $(html).find(".recipe-title").each(function () {
                console.log($(this).text());
                recipeShort[a] = ($(this).text().trim());
                console.log($(this).find('a').attr("href"));
                recipeUrl[a++] = $(this).find('a').attr("href");
            });
        });
    } else {
        let a = 0;
        console.log(recipeUrl[recipeId]);
        getServingsFromAniaStarmach();
        await $.get("https://cors-anywhere.herokuapp.com/" + recipeUrl[recipeId], function (html) {
            $(html).find('.field-name-field-skladniki').find('li').each(function () {
                   //console.log($(this).text());
                    recipeFull[a++] = ($(this).text());
            });
        });
    }

}

async function getServingsFromAniaStarmach()
{
    await $.get("https://cors-anywhere.herokuapp.com/" + recipeUrl[recipeId], function (html) {
        recipeServingsOrginal = $(html).find('.recipe-icon.icon-portions span').first().text();
    });
}