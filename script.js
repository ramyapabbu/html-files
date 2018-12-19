$(document).ready(function(){


console.log("start of js file");


/* Fetch data from the json file into a javascript object */
fetch("https://blogg.adventurehero.se/wp-json/wp/v2/posts")

.then(function(response) {
    return response.json();
})
.then(function(data) {
    post = data;
  
    console.log(post);
    createListFrompost();
});
function createListFrompost() {
    
    console.log("i var funktion");
    console.log(post);

       
    //var postbook = document.createElement("div");
      //  postBook.className = 'postbookClass';

    
    for(var index = 0; index < post.length; index++) {
       
    console.log(post[index].slug);
    $(".bloggPost").append("<div class='post'>"+post[index].title.rendered+"</div>")
    $(".bloggPost").append("<a href='"+post[index].link+"'>read more</a>")
    $(".bloggPost").append("<img src='"+post[index].better_featured_image.source_url+"'>")

    }
    
    
    
    
    




    
    
        
    
}

});
