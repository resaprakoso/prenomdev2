window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.backgroundColor = "white";
    document.getElementById("navbar").style.boxShadow = "0px 1px 5px 2px rgba(0,0,0,0.45)";
  } else {
    document.getElementById("navbar").style.backgroundColor = "transparent";
    document.getElementById("navbar").style.boxShadow = "none";
    
  }
}

function menuWorks(){
const element = document.getElementById("scrollWorks")
element.scrollIntoView();
}

function menuContact(){
const element = document.getElementById("footer")
element.scrollIntoView();
}