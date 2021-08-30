var inputBill=Number(prompt("What is your bill?"));

var taxAmount=inputBill*.07;
var taxTotal=inputBill+taxAmount;
var tipAmount=taxTotal*.05
var total= tipAmount+taxTotal

var element= document.body.querySelector(".box")

element.innerHTML= total;