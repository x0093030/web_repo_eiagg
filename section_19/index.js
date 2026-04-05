alert("Working with CSS");

$("h1").css("color", "blue");
$("h1").addClass("big-title");

console.log($("h1").css("color"));
console.log($("h1").css("font-size"));
console.log($("h1").hasClass("big-title"));
console.log($("h1").hasClass("title"));

$("a").attr("href", "https://www.yahoo.com");

$("h1").click(function(){ 
    $("h1").css("color", "purple");
});

$("button").click(function(){
    $("h1").css("color", "purple");
});

$(document).keypress(function(event){
    $("h1").text(event.key);
});

$("input").keypress(function(event){
    console.log(event.key); 
});

$("h1").on("mouseover", function(){
    $("h1").css("color", "purple");
});

$("h1").before("<button>before_button</button>");
$("h1").after("<button>after_button</button>");
$("h1").prepend("<button>prepend_button</button>");
$("h1").append("<button>append_button</button>");

$("button").on("click", function(){
    $("h1").fadeOut().fadeIn();
});

$("button").on("click", function(){
    $("h2").slideUp().slideDown();
});