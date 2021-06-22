$(document).ready( function(){
  // button2
  $("#btn2").click(function (){
    $("#btn1,#btn3,#btn4").toggle(function() {

    })
  })

 
})

// button3
var changeColor = false;
var color = document.getElementById("sColor");
function changeTheColor() {


  if (changeColor ^= true) {
     color.style.background = "rgb(213, 213, 213)"; 
  }
   else {
      color.style.background = "#CA5310"; 
  }
}

// button4
var hideHolaMundo = false;
var div = document.getElementById("HM");
function holaMundo() {


  if (hideHolaMundo ^= true) {
     div.style.display = "block"; 
  }
   else {
     div.style.display = "none"; 
  }
}


// toggle
const navToggle = document.querySelector(".toggleM")
const navMenu = document.querySelector(".ulMenu")

navToggle.addEventListener("click", () =>{
  console.log(navMenu)
  navMenu.classList.toggle("ulMenu_visible")
})