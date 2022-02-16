var IP = document.querySelector("#IP")
var Shares = document.querySelector("#Shares")
var CP = document.querySelector("#CP")
var calc = document.querySelector("#calc")
var output = document.querySelector("#output")

calc.addEventListener("click",calculateoutput)

function calculateoutput(){
    var IPflt = parseFloat(IP.value)
    var Sharesflt = parseFloat(Shares.value)
    var CPflt = parseFloat(CP.value)
    
    if (IPflt > CPflt){
        var loss = (IPflt - CPflt) * Sharesflt
        var losspercent = (loss/IPflt)*100
        output.innerText = "Your Loss is of "+parseInt(losspercent)+"% and the loss is of "+loss;
    }
    else if(IPflt < CPflt){
        var profit = (CPflt - IPflt) * Sharesflt
        var profitpercent = (profit/IPflt)*100
        output.innerText = "Your profit is of "+parseInt(profitpercent)+"% and the profit is of "+profit;
    }
    else{
        output.innerText = "You got neither profit nor loss."
    }
}