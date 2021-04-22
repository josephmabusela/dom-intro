// get a reference to the sms or call radio buttons
var billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");

var callTotalSettings = document.querySelector(".callTotalSettings");
var smsTotalSettings = document.querySelector(".smsTotalSettings");
var totalSettings = document.querySelector(".totalSettings");

// get refences to all the settings fields
var callCostSetting = document.querySelector(".callCostSetting");
var smsCostSetting = document.querySelector(".smsCostSetting");
var warningLevelSetting = document.querySelector(".warningLevelSetting");
var criticalLevelSetting = document.querySelector(".criticalLevelSetting");

//get a reference to the add button
var addButton = document.querySelector(".addButton");

//get a reference to the 'Update settings' button
var updateSettings = document.querySelector(".updateSettings");

// create a variables that will keep track of all the settings
var costCall = 0;
var costSms = 0;
var warningLevel = 0;
var criticalLevel = 0;

// create a variables that will keep track of all three totals.
var totalCall = 0;
var totalSms = 0;
var overallTotal = 0;

function updateBtn() {

    costCall = callCostSetting.value;
    costSms = smsCostSetting.value;
    warningLevel = warningLevelSetting.value;
    criticalLevel = criticalLevelSetting.value;

    if (overallTotal < warningLevel) {
        totalSettings.classList.remove("warning");
        totalSettings.classList.remove("danger");
    }
    if (overallTotal >= warningLevel && overallTotal < criticalLevel) {
        totalSettings.classList.add("warning");
        totalSettings.classList.remove("danger");
    }
    if (overallTotal >= criticalLevel) {
        totalSettings.classList.remove("warning");
        totalSettings.classList.add("danger");
    }
}

function addBtn(){

    var radioButton = document.querySelector("input[name='billItemTypeWithSettings']:checked");

    if (overallTotal < criticalLevel) {
        if (radioButton) {
            billItemTypeWithSettings = radioButton.value;
        }
        if (billItemTypeWithSettings === "call"){
            totalCall += costCall
            overallTotal += costCall
        }
        else if (billItemTypeWithSettings === "sms"){
            totalSms += costSms
            overallTotal += costSms
        }
    }
    
    callTotalSettings.innerHTML = totalCall.toFixed(2);
    smsTotalSettings.innerHTML = totalSms.toFixed(2);
    totalSettings.innerHTML = overallTotal.toFixed(2);

    if (overallTotal < warningLevel) {
        totalSettings.classList.remove("warning");
        totalSettings.classList.remove("danger");
    }
    if (overallTotal >= warningLevel && overallTotal < criticalLevel) {
        totalSettings.classList.add("warning");
        totalSettings.classList.remove("danger");
    }
    if (overallTotal >= criticalLevel) {
        totalSettings.classList.remove("warning");
        totalSettings.classList.add("danger");
    }
}



//add an event listener for when the 'Update settings' button is pressed
updateSettings.addEventListener("click", updateBtn);

//add an event listener for when the add button is pressed
addButton.addEventListener("click", addBtn);

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
