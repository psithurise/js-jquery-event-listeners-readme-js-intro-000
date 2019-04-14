//define functions here
function getIt() {
 //bind click event to p tag. when clicked, alert "hey!"
 $('p').on('click', function() {
   alert("Hey!")
 })
}

function frameIt() {
 //bind load event, adds class tasty to img
 $('img').on('load', function() {
   
 })
}

function pressIt() {
 //bind keydown event to g key in input field of form
 $('form').on('keydown', function(key) {
   if(key.which == g)
    alert("you sure pressed that")
 })
}

function sumbitIt() {
 //bind submit event to form, alerts "your form is going to be submitted now."
 $("form").on("submit", function() {
  if ($( "input:first" ).val() === "correct") {
    alert('your form is going to be submitted now');
    return;
  }
  alert("you entered the wrong value");
  return;
})
}


$(document).ready(function(){

// call functions here

});
