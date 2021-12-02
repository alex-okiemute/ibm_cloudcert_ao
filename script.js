function compute()
{
    //Create input variables
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value; //variable rate
    var years = document.getElementById("years").value; //variable years
    var interest = principal * years * rate /100; //variable interest
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>" 
}

//Function that reads the value of the range slider and displays dynatically
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

//Function to ensure Principal values are not 0 or negative
function checkdata(){
    //create references to the input elements we wish to validate
    var principalval = document.getElementById("principal");
    
    if (principalval.value <= 0){
        alert("Enter a positive value");
        principalval.focus();
        return false;
    }
    return true;    
}

