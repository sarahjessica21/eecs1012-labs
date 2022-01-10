// in Ex2 to Ex8, change the name of the following function properly
// also update pre/post condition accordingly.
function equation() {
    //precondition: 
    //	num1 represents a Real number. num2 represents a Real number. num3 represents a Real Number
    //Postcondition:
    //	The number of roots of num1 and num2 and num3 has been outputted                                
 
 
    /* in Ex1, change the following two lines such that 
       num1 and num2 are parsed to integer before being 
       assigned to w and h, respectively.   
                       */
     

    /* in Ex 2, rename w and h to a and b, respectively.    */
    var a = parseInt (document.getElementById("num1").value);
    var b = parseInt (document.getElementById("num2").value);
    var c = parseInt (document.getElementById("num3").value);
    /* in Ex2, write a similar code to the above line
       to capture the value for c*/
 
 
    /* in Ex2 to Ex4, you need to replace the following line 
        with some other formulas */
        
        var t1 = parseFloat(-b+Math.sqrt(b*b-4*a*c))/(2*a);
        var t2 = parseFloat(-b-Math.sqrt(b*b-4*a*c))/(2*a);
        var r = b*b-4*a*c;

let answer;

if (r>0) {
    answer= "it has 2 distinct roots"
    //  block of code to be executed if condition1 is true
  } else if (r<0) {
    answer= "it has no roots in real numbers"
    //  block of code to be executed if the condition1 is false and condition2 is true
  } else {
    answer="its roots are identical"
    //  block of code to be executed if the condition1 is false and condition2 is false
  }


        //FINISH THIS (IF AND ELSE STATEMENTS)
        
    /* in Ex5, you should delete from Line 15 to this line */
 
    /*   //in Ex 5, uncomment this block
    switch (true){
     case (a>89): 
        answer="A+";
        break;
     case (a>79): 
        answer="A";
        break;
        // in Ex5, you need to add more cases for other letter grades
     default:
        answer="F";
    }
    */
 
    /* in Ex2 to Ex5, you need to renmae "sum" to make it more relevant
       to those problems, you may also need to rename s to a better 
       varibale that you have in your formulas above */
    document.getElementById("output").innerHTML = answer;
   
   
 }