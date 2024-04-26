async function getDataFromAniaGotuje(recipeName, type){
    if(type == "list") {
        let a = 0;
        //await $.get('assets/ania_pierogi.html', function (html) {
        await $.get('https://cors-anywhere.herokuapp.com/https://aniagotuje.pl/szukaj?s='+recipeName, function (html) {
            $(html).find('.article-content').each(function () {
                console.log($(this).text());
                recipeShort[a++] = ($(this).find('h3').text().trim());
                //recipeShort[a++] = ($(this).text());
            });
        });
        a = 0;
        //await $.get('assets/ania_pierogi.html', function (html) {
        await $.get('https://cors-anywhere.herokuapp.com/https://aniagotuje.pl/szukaj?s='+recipeName, function (html) {
            $(html).find('.article-content').each(function () {
                console.log($(this).attr("href"));
                recipeUrl[a++] = $(this).find('a').attr("href");
                console.log(recipeUrl[a - 1]);
            });
        });
    } else {
        let a = 0;
        await $.get("https://cors-anywhere.herokuapp.com/" + recipeUrl[recipeId], function (html) {
        //await $.get('assets/full_'+recipeId+'.html', function (html) {
            $(html).find('.recipe-ing-list').each(function () {
                console.log($(this).text());
                recipeFull[a++] = ($(this).text());
            });
        });
    }
}