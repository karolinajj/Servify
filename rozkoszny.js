async function getDataFromRozkoszny(recipeName, type){
    if(type == "list") {
        let a = 0;
        await $.get('https://cors-anywhere.herokuapp.com/https://rozkoszny.pl/?s='+recipeName, function (html) {
            $(html).find('.elementor-post__title').each(function () {
                //console.log($(this).text());
                recipeShort[a] = ($(this).text().trim());
                //console.log($(this).find('a').attr("href"));
                recipeUrl[a++] = $(this).find('a').attr("href");
            });
        });
    } else {
        let a = 0;
        await $.get("https://cors-anywhere.herokuapp.com/" + recipeUrl[recipeId], function (html) {
            $(html).find('.elementor-widget-container').find('p').each(function () {
                if(++a==4){
                   //console.log($(this).text());
                    recipeFull[0] = ($(this).text());
                }
            });
        });
    }

}