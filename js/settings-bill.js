  
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

var settingsBillInstance = BillSettings();
//alert(settingsBillInstance);

// create a variables that will keep track of all the settings
// var costCall = 0;
// var costSms = 0;
// var warningLevel = 0;
// var criticalLevel = 0;

// create a variables that will keep track of all three totals.
var totalCall = 0;
var totalSms = 0;
var overallTotal = 0;

//add an event listener for when the 'Update settings' button is pressed
updateSettings.addEventListener("click", function() {
    // costCall = callCostSetting.value;
    // costSms = smsCostSetting.value;
    // warningLevel = warningLevelSetting.value;
    // criticalLevel = criticalLevelSetting.value;

    settingsBillInstance.setCallCost(parseFloat(callCostSetting.value));
    settingsBillInstance.setSmsCost(parseFloat(smsCostSetting.value));
    settingsBillInstance.setWarning(parseFloat(warningLevelSetting.value));
    settingsBillInstance.setCritical(parseFloat(criticalLevelSetting.value));

    addClasses();
});

//add an event listener for when the add button is pressed
addButton.addEventListener("click", function() {
    var radioButton = document.querySelector(".billItemTypeWithSettings:checked");

    if (radioButton) {
        settingsBillInstance.billTotal(radioButton.value);
    }

    settingsBillInstance.getCallCost();
    settingsBillInstance.getSmsCost();

    if (settingsBillInstance.gettRadioInput() === "call") {
        settingsBillInstance.makeCall();
    }
    if (settingsBillInstance.gettRadioInput() === "sms") {
        settingsBillInstance.sendSms();
    }
    
    callTotalSettings.innerHTML = settingsBillInstance.getTotalCallCost().toFixed(2);
    smsTotalSettings.innerHTML = settingsBillInstance.getTotalSmsCost().toFixed(2);
    totalSettings.innerHTML = settingsBillInstance.getTotalCost().toFixed(2);

    addClasses()
});

function addClasses() {
    totalSettings.classList.remove("warning");
    totalSettings.classList.remove("danger");

    totalSettings.classList.add(settingsBillInstance.levels());
}

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.