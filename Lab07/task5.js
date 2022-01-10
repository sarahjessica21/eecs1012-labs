// JavaScript code for Task 5
// Learning Objectives: use of arrays and use of object Date

function myFunction() {
  var p = document.getElementById("mydata");
  //call a sub-algorithm to return the current time and date in a specific format
  p.innerHTML = getDateInCustomizedFormat();
}

// a sub-algorithm to return the current date in a customized format
// pre-conditions: none
// post-conditions: returns current time and date in the following format: "It's HOUR:MIN. Today is DAYOFWEEK (MONTH DAY, YEAR)."
//                  where capital words are replaced by appropriate values.
function getDateInCustomizedFormat() {
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  var date = new Date();


  var dayOfWeek = days[date.getDay()];
  var month = months[date.getMonth()];
  var day = date.getDate();
  var year = date.getFullYear();
  var hour = date.getHours();
  var min = date.getMinutes();

  /* TODO 1: complete the following statement such that the current time and date are shown with 
     a format similar to that of the corresponding figure in Lab07 specification */ 
  var result = "It's" + " " +hour + ":" +min + "." + " " + "Today is " +dayOfWeek + " " + "(" +month + " " +day + ", " +year + ")" + "."; 
  return result;
}