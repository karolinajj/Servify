function filter(recipeName, text){
   //return text.includes(recipeName);
   return true;
}

async function getDataFromRozkoszny(recipeName, type){
    if(type == "list") {
        let a = 0;
        await $.get('https://cors-anywhere.herokuapp.com/https://ervegan.com/?s='+recipeName+'&submit=szukaj', function (html) {

            $(html).find(".entry-title").each(function () {
                if(filter(recipeName, $(this).text().trim())){
                    recipeShort[a] = ($(this).text().trim());
                    recipeUrl[a++] = "https://ervegan.com/" + $(this).find('a').attr("href");
                }
            });
        });
    } else {
        let a = 0;
        //console.log(recipeUrl[recipeId]);
        getServingsFromRozkoszny();
        await $.get("https://cors-anywhere.herokuapp.com/" + recipeUrl[recipeId], function (html) {
            $(html).find('.box yellow-box').find('br').each(function () {
                   //console.log($(this).text());
                    recipeFull[a++] = ($(this).text());
            });
        });
    }
}

async function getServingsFromRozkoszny()
{
    await $.get("https://cors-anywhere.herokuapp.com/" + recipeUrl[recipeId], function (html) {
        recipeServingsOrginal = $(html).find('.box yellow-box').first().text();
    });
}
