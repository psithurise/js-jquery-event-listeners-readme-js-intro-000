//define functions here
function getIt() {
 //bind click event to p tag. when clicked, alert "hey!"
 $('p').on('click', function() {
   alert("Hey!")
 })
}

function frameIt() {
 //bind load event, adds class tasty to img
 $(document).on('load', function() {
   $('img').addClass("tasty")
 })
}

function pressIt() {
 //bind keydown event to g key in input field of form
 $('form').on('keydown', function(key) {
   if(key.which == 71)
    alert("you sure pressed that")
 })
}

function submitIt() {
 //bind submit event to form, alerts "your form is going to be submitted now."
 $('form').on('submit', function() {
    alert('Your form is going to be submitted now.');
})
}


$(document).ready(function(){

// call functions here
getIt()
frameIt()
pressIt()
submitIt()
});
