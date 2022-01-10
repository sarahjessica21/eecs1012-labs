// JavaScript code for Task 2
// Learning Objective 1: use of a sub-algorithm with one parameter
// Learning Objective 2: use of Math.random() and Math.floor()

function passNum(num) {
  var p = document.getElementById("mydata");

  //call a sub-algorithm to return a random whole number in range [1,num]
  var result = generateNum(num);
  result = Math.ceil(result);

  p.innerHTML= "A random number between 1 and " + num + " is " + result;
  /* TODO 1: changes the content of paragraph p accordingly*/

}
function btnPressed(value){
  document.getElementById("mydata").innerHTML = "Result = " + value;
}
// a sub-algorithm to return a random number
// pre-conditions: upTo belongs to Natural numbers > 0
// post-conditions: returns a random whole number in range [1, upTo]
function generateNum(upTo) {

  /*TODO 2: implement the body of the function here to return a random number between 1 and upTo*/

  return Math.random() * (upTo - 1) + 1;

}
