// JavaScript code for Task 1
// Learning Objective 1: use of sub-algorithm (aka function) with zero parameters
// Learning Objective 2: use of Math.random()

function myFunction() {
  var p = document.getElementById("mydata");

  //call a sub-algorithm to return a random number in [0,2)
  var num = generateNum();

  /*TODO 1: write an if statement here that--based on the value 
   of num--changes the paragraph content to HEADS or TAILS */
   
   p = Math.random();
  document.getElementById("mydata").innerHTML = "num:";

  if (p >= 0.5) {
    document.getElementById("mydata").innerHTML = "Tails";
  }
  else {
    document.getElementById("mydata").innerHTML = "Heads";
  }

}

// a sub-algorithm to return a random number
// pre-conditions: none
// post-conditions: returns a random number in [0,2)
function generateNum() {

  /*TODO 2: implement the body of the function here to return a random number between 0 and 2*/

 
 var num = Math.floor((Math.random() * 2)+1);
return num; 
 
}

