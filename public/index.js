/* Get from mongoDB*/
var counter = 0;

var container = document.getElementsByClassName("rank-test");

window.onload = function() {
  var rankUp = document.getElementById("rank-up").addEventListener("click", function() {
    /* Will have to be sent back to Mongo */
    counter++;

    console.log("== Count incremented. Is currently: ", counter);
  });


  var rankDown = document.getElementById("rank-down").addEventListener("click", function() {
    /* Will have to be sent back to Mongo */
    counter--;

    console.log("== Count decremented. Is currently: ", counter);

  });

}