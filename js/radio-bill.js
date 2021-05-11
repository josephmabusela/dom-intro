// get a reference to the sms or call radio buttons
var callTotalTwo = document.querySelector(".callTotalTwo");
var smsTotalTwo = document.querySelector(".smsTotalTwo");
var totalTwo = document.querySelector(".totalTwo")

//get a reference to the add button
var radioBillAddBtn = document.querySelector(".radioBillAddBtn");

var radioBillInstance = radioBill();

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
   
    var radioBtn = document.querySelector(".billItemTypeRadio:checked");

    if (radioBtn) {
        radioBillInstance.setRadioInput(radioBtn.value);
        //var billItemTypeRadio = radioBtn.value;
    }

    if (radioBillInstance.gettRadioInput() === "call") {
        radioBillInstance.makeCall();
        //callTotalTwo.innerHTML = callTotal.toFixed(2);
    }
    if (radioBillInstance.gettRadioInput() === "sms") {
        //var currentSmsTotal = parseFloat(smsTotalTwo.innerHTML);
        radioBillInstance.sendSms();
        //smsTotalTwo.innerHTML = smsTotal.toFixed(2);
    }
    
    callTotalTwo.innerHTML = radioBillInstance.getCallTotal().toFixed(2);
    smsTotalTwo.innerHTML = radioBillInstance.getSmsTotal().toFixed(2);
    totalTwo.innerHTML = radioBillInstance.radioTotal().toFixed(2);

    totalTwo.classList.remove("warning");
    totalTwo.classList.remove("danger");

    totalTwo.classList.add(radioBillInstance.levels())
    //billTotal = callTotal + smsTotal;

    // if (billTotal > 30.00) {
    //     totalTwo.classList.add("warning");
    // }
    // if (billTotal > 50.00) {
    //     totalTwo.classList.add("danger");
    // }

    //addClasses()
});

// function addClasses() {
//     totalTwo.classList.remove("warning");
//     totalTwo.classList.remove("danger");

//     totalTwo.classList.add(radioBillInstance.levels());
// }