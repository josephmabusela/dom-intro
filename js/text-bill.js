// get a reference to the textbox where the bill type is to be entered
var billTypeText = document.querySelector(".billTypeText");
var callTotalOne = document.querySelector(".callTotalOne");
var smsTotalOne = document.querySelector(".smsTotalOne");
var totalOne = document.querySelector(".totalOne");
var addToBillBtn = document.querySelector(".addToBillBtn");

var callTotalBill = 0;
var smsTotalBill = 0;
var billTotalBill = 0;

//add an event listener for when the add button is pressed
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
addToBillBtn.addEventListener("click", function(){

    //var text = document.querySelector(".billTypeText").value;

    if (billTypeText.value === "call"){
        callTotalBill += 2.75;
    }

    else if (billTypeText.value === "sms"){
        //var smsBill = smsTotalOne.innerHTML;
        smsTotalBill += 0.75;
        //smsTotalOne.innerHTML = smsTotal.toFixed(2);
    }
    

    callTotalOne.innerHTML = callTotalBill.toFixed(2);
    smsTotalOne.innerHTML = smsTotalBill.toFixed(2);

    billTotalBill = smsTotalBill + callTotalBill;
    totalOne.innerHTML = billTotalBill.toFixed(2);
    
    //var billTotal = callTotalOne.innerHTML + smsTotalOne.innerHTML;
    //totalOne.innerHTML = billTotal.toFixed(2);

    if (billTotalBill > 30){
        totalOne.classList.add("warning");
        //document.querySelector(".totalOne").classList.add("warning");
    }
    if (billTotalBill > 50){
        totalOne.classList.add("danger");
        //document.querySelector(".totalOne").classList.add("danger");
    }
});
