async function getDataFromKwestia(recipeName, type){
    if(type == "list") {
        let a = 0;
        await $.get('https://cors-anywhere.herokuapp.com/https://www.kwestiasmaku.com/szukaj?search_api_views_fulltext='+recipeName, function (html) {
            $(html).find(".field-name-title").each(function () {
                //console.log($(this).text());
                recipeShort[a] = ($(this).text().trim());
                //console.log($(this).find('a').attr("href"));
                recipeUrl[a++] = "https://www.kwestiasmaku.com/" + $(this).find('a').attr("href");
            });
        });
    } else {
        let a = 0;
        console.log(recipeUrl[recipeId]);
        await $.get("https://cors-anywhere.herokuapp.com/" + recipeUrl[recipeId], function (html) {
            $(html).find('.field-name-field-skladniki').find('li').each(function () {
                   //console.log($(this).text());
                    recipeFull[a++] = ($(this).text());
            });
        });
    }

}