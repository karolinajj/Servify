function filter(recipeName, text){
    return text.toLowerCase().includes(recipeName.toLowerCase());
   //return true;
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
            let ingredientsBox = $(html).find('.box.yellow-box');

            let ingredientsText = ingredientsBox.html().replace(/<br\s*\/?>/gi, "\n");
            let ingredients = ingredientsText.split("\n");
            
            let a = 0;
            for (let i = 0; i < ingredients.length; i++) {
                let ingredient = $.trim(ingredients[i]);
                if (ingredient.length > 0) {
                    recipeFull[a++] = ingredient;
                    console.log(ingredient);
                }
            }
        });

    }
}

async function getServingsFromRozkoszny()
{
    await $.get("https://cors-anywhere.herokuapp.com/" + recipeUrl[recipeId], function (html) {
        console.log($(this).text());    
        recipeServingsOrginal = $(html).find('.box.yellow-box').html().replace(/<br\s*\/?>/gi, "\n").split("\n")[0];
    });
}
