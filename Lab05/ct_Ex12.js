// in Ex9 to Ex15, change the name of the following function properly
function problem_12() {
  
    /* this statement defines an object reference to the 
       html element that its ID is "output".
       Every time you want to output something, use outputObj */
    var outputObj=document.getElementById("output");
  
    // this statement receives some data and parses it to integer
    var a = parseInt(prompt("Please enter a number: ", ""));
   
    /* this statement add some message to our output Object
       you would need to change the message to be appropriate in Ex10 to E15*/
    
       outputObj.innerHTML="number: "+a+" <br><br> equal to its reverse?: ";

    // translate rest of your flowcharts to js here:

    
    var reverse = 0; 
    var temp = a;

    while (a>0) {
        modu = a % 10;
        reverse = reverse * 10 + modu;
        a = Math.floor(a / 10);
    } 
    if (temp == reverse){
     
  
    outputObj.innerHTML= outputObj.innerHTML+ "Yes";
        }
    else {
   
    
    
    outputObj.innerHTML= outputObj.innerHTML+ "No";
}
    
           
         
    
   
 
  
    
    

  
  
  
  
  
  
    
    
    
    
    //the following statements inform the user that the program ended
    //and disable the button (the comment was added on Oct 2021)
    outputObj.innerHTML=outputObj.innerHTML+"<br><br>"+"program ended";
    document.getElementsByTagName("button")[0].setAttribute("disabled","true");
  }