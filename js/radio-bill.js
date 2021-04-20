// get a reference to the sms or call radio buttons
var callTotalTwo = document.querySelector(".callTotalTwo");
var smsTotalTwo = document.querySelector(".smsTotalTwo");
var totalTwo = document.querySelector(".totalTwo")

//get a reference to the add button
var radioBillAddBtn = document.querySelector(".radioBillAddBtn");

//create a variable that will keep track of the total bill
var callTotal = 0;
var smsTotal = 0;
var billTotal = 0;

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
radioBillAddBtn.addEventListener("click", function() {
   

    var radioBtn = document.querySelector("input[name='billItemType']:checked");

    if (radioBtn) {
        var billItemTypeRadio = radioBtn.value;
    }

    if (billItemTypeRadio === "call") {
        callTotal += 2.75;
        //callTotalTwo.innerHTML = callTotal.toFixed(2);
    }
    if (billItemTypeRadio === "sms") {
        //var currentSmsTotal = parseFloat(smsTotalTwo.innerHTML);
        smsTotal +=  0.75;
        //smsTotalTwo.innerHTML = smsTotal.toFixed(2);
    }
    
    callTotalTwo.innerHTML = callTotal.toFixed(2);
    smsTotalTwo.innerHTML = smsTotal.toFixed(2);
    billTotal = callTotal + smsTotal;
    totalTwo.innerHTML = billTotal.toFixed(2);

    if (billTotal > 30.00) {
        totalTwo.classList.add("warning");
    }
    if (billTotal > 50.00) {
        totalTwo.classList.add("danger");
    }
});