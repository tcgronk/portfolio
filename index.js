let today = new Date();
let dd = today.getDate();
let mm = today.getMonth()+1; //January is 0!
let yyyy = today.getFullYear();
if(dd<10) {
    dd='0'+dd
}
if(mm<10) {
    mm='0'+mm
}
today = mm+'/'+dd+'/'+yyyy;
var d2 = new Date(today);
var d1 = new Date("05/11/2019");
var timeDiff = d2.getTime() - d1.getTime();
var DaysDiff = timeDiff / (1000 * 3600 * 24);
{/* <img class='background' src='alphabetSoup.jpg' alt='alphabet soup image'></img> */}
function sideBar(){
    $("#sideBar").text("I've been learning to code for: "+DaysDiff+" days")
}

function homePage(){
    $(".home").on("click",function(event){
        $(".home").css("color","rgb(175, 226, 247)");
        $(".projects").css("color","white");
        $(".contactMe").css("color","white");
        $("main").html("<section class='personalBio'><p>Bio Here</p></section>");
    });
}


function projectsPage(){
    $(".projects").on("click", function(event){
        $(".home").css("color","white");
        $(".projects").css("color","rgb(175, 226, 247)");
        $(".contactMe").css("color","white");
        $("main").html("<section class='projectsPageData'><section class='projectDescription'><a href='https://github.com/tcgronk/Quiz-App' target='_blank'><h2>Quiz App</h2></a><p>Check out my first project! To create this quiz app, I used HTML, CSS, Javascript, & jQuery. </p></section><section><a class='wineApp' href='https://tcgronk.github.io/Quiz-App/' target='_blank'><img src='portfolio-wine.jpg' alt='portfolio quiz app'></a></section>");
    });
}

function contactPage(){
    $(".contactMe").on("click", function(event){
        $(".home").css("color","white");
        $(".contactMe").css("color","rgb(175, 226, 247)");
        $(".projects").css("color","white");
        $('main').html("<section class='contacting'><p>Contact Info Here</p></section>");
    });
}

$( document ).ready(function() {
    $("main").html("<section class='personalBio'><p>Bio Here</p></section>");
    $(".home").css("color","rgb(175, 226, 247)");
});


function createPortfolio(){
    homePage();
    sideBar();
    projectsPage();
    contactPage();
    getDate();
}

$(createPortfolio);
    

