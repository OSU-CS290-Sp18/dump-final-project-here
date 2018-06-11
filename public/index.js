/* Get from mongoDB */
var counter = 0;
var rating = 0;

/* Will recieve all rating based information */
/* Prevents the page from loading like shit */
window.onload = function() {

  /* Catches exceotion for no database information. Will prevent listing of NaN or NULL*/
  if(rating === 0) {
    document.getElementById("rank-counter").innerHTML = "No Reviews";
  }

  /* Following code blocks will input different rating values */
  var rankOne = document.getElementById("rank-1").addEventListener("click", function() {
    /* Will have to be sent back to Mongo */
    counter++;
    rating += 1;
    updateCounter();
  });

  var rankTwo = document.getElementById("rank-2").addEventListener("click", function() {
    /* Will have to be sent back to Mongo */
    counter++;
    rating += 2;
    updateCounter();
  });

  var rankThree = document.getElementById("rank-3").addEventListener("click", function() {
    /* Will have to be sent back to Mongo */
    counter++;
    rating += 3;
    updateCounter();

  })
  var rankFour = document.getElementById("rank-4").addEventListener("click", function() {
    /* Will have to be sent back to Mongo */
    counter++;
    rating += 4;
    updateCounter();

  });

  var rankFive = document.getElementById("rank-5").addEventListener("click", function() {
    /* Will have to be sent back to Mongo */
    counter++;
    rating += 5;
    updateCounter();

  });
}

function updateCounter() {
  var newRating = rating / counter;
  /* Enforces 2 decimal places */
  newRating = newRating.toFixed(2);
  document.getElementById("rank-counter").innerHTML = newRating;
}