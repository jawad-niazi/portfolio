/*var xhr= new XMLHttpRequest();
var url='./health_Article.json';
xhr.open('GET',url,true);
xhr.responseType='json';

xhr.onload(function(){
    if(xhr.status==200){
var articles=xhr.response.articles;
var articlesDiv=document.getElementById('articles');



articles.forEach(function (article) {

    var articlediv=document.createElement("div");
    articlediv.classList.add('article');

    var title= document.createElement('h2');
    title.textContent=article.title;
    
    var description = document.createElement('h3');
    description .textContent=article.description ;

    var waysHeader=document.createElement('h3');
    waysHeader.textContent='ways to achieve'
    var listheader=document.createElement('ul');
    listheader.ways_to_achieve.forEach(function(way){
        var listItem=document.createElement('li');
        listItem.textContent=way;
        listheader.appendChild(listItem);

    });
    var benifitHeader=document.createElement('h3');
    benifitHeader.textContent="Benifts";
     

    var benefits =document.createElement('ul');
    article.benefits .forEach(function(benifit){
        var listItem=document.createElement('li');
        listItem.textContent=benifit;
        benefits.appendChild(listItem);
    });


    articlediv.appendChild(title);
    articlediv.appendChild(description);
    articlediv.appendChild(waysHeaderheader);
    articlediv.appendChild(listheader);
    articlediv.appendChild(benifitHeader);
    articlediv.appendChild(benefits);

    articlesDiv.appendChild(articlediv);
    
    
    
    
    

});


}else{
    console.log('error getting articles:',xhr.status);
};
});

xhr.send();*/


var xhr = new XMLHttpRequest();
var url = './health_Article.json';

xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function () {
    if (xhr.status === 200) {
        var articles = xhr.response.articles; // Ensure JSON structure is correct
        var articlesDiv = document.getElementById('articles');

        articles.forEach(function (article) {
            var articlediv = document.createElement("div");
            articlediv.classList.add('article');

            var title = document.createElement('h2');
            title.textContent = article.title;

            var description = document.createElement('h3');
            description.textContent = article.description;

            var waysHeader = document.createElement('h3');
            waysHeader.textContent = 'Ways to achieve';

            var listheader = document.createElement('ul');
            article.ways_to_achieve.forEach(function (way) {
                var listItem = document.createElement('li');
                listItem.textContent = way;
                listheader.appendChild(listItem);
            });

            var benefitHeader = document.createElement('h3');
            benefitHeader.textContent = "Benefits";

            var benefitList = document.createElement('ul');
            article.benefits.forEach(function (benefit) {
                var listItem = document.createElement('li');
                listItem.textContent = benefit;
                benefitList.appendChild(listItem);
            });

            // Append elements to article div
            articlediv.appendChild(title);
            articlediv.appendChild(description);
            articlediv.appendChild(waysHeader);
            articlediv.appendChild(listheader);
            articlediv.appendChild(benefitHeader);
            articlediv.appendChild(benefitList);

            // Append article to main container
            articlesDiv.appendChild(articlediv);
        });
    } else {
        console.error("Failed to load articles. Status:", xhr.status);
    }
};

// Send request
xhr.send();
