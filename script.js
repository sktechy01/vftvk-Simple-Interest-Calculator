function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    if(principal <=0)
    {
        alert("Enter a positive number");
        document.getElementById("principal").value="";
        document.getElementById("principal").focus();
    }
    else
    {
        document.getElementById("result").innerHTML="If you deposit <span class='bgcolor-yellow'>"+principal+"</span>,\<br\>at an interest rate of <span class='bgcolor-yellow'>"+rate+"%</span>\<br\>You will receive an amount of <span class='bgcolor-yellow'>"+interest+"</span>,\<br\>in the year <span class='bgcolor-yellow'>"+year+"</span>\<br\>"
    }
}
        
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}


