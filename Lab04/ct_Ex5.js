// in Ex2 to Ex8, change the name of the following function properly
// also update pre/post condition accordingly.
function mapping() {
    //precondition: 
    //	num1 represents a Real number 
    //Postcondition:
    //	The letter grade of the inputed number has been outputted                                
 
 
    /* in Ex1, change the following two lines such that 
       num1 and num2 are parsed to integer before being 
       assigned to w and h, respectively.   
                       */
      
        
    /* in Ex5, you should delete from Line 15 to this line */
 
     //in Ex 5, uncomment this block
     var a = parseInt (document.getElementById("num1").value);

let answer;
    switch (true){
     case (a>89): 
        answer="A+";
        break;
     case (a>79): 
        answer="A";
        break;
        // in Ex5, you need to add more cases for other letter grades
    case (a>74):
        answer="B+";
        break;
    case (a>69):
        answer="B";
        break;
    case (a>64):
        answer="C+";
        break;
    case (a>59):
        answer="C";
        break;
    case (a>54):
        answer="D+";
        break;
    case (a>49):
        answer="D";
        break;
    case (a>45):
        answer="E";
        break;

     default:
        answer="F";
    }
    
 
    /* in Ex2 to Ex5, you need to renmae "sum" to make it more relevant
       to those problems, you may also need to rename s to a better 
       varibale that you have in your formulas above */
    document.getElementById("output").innerHTML =  answer;
   
   
 }