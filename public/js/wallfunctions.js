//$(document).ready(function() {
//    initializePage();
//});
//
//function initializePage() {
//    $('#testjs').click(function(e) {
//            $('.jumbotron h1').text("Javascript is connected");
//            });
//
//    $("a.thumbnail").click(projectClick);
//
//}
//function projectClick(e) { 
//    // prevent the page from reloading      
//    e.preventDefault();
//    // In an event handler, $(this) refers to      
//    // the object that triggered the event      
//    $(this).css("background-color", "#7fff00");
//}

function addNotes(){
    //var test = "stickynote";
    console.log("StickyNote!")
    //var test = $("<p></p>").text("StickyNote"); 
    //$("body").append(test);
     $("body ul").append("<li><a href='#' contenteditable='true'><h2>New Note</h2><p>type something...</p></a></li>");
}

