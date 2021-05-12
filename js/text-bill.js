// get a reference to the textbox where the bill type is to be entered
var billTypeText = document.querySelector(".billTypeText");
var callTotalOne = document.querySelector(".callTotalOne");
var smsTotalOne = document.querySelector(".smsTotalOne");
var totalOne = document.querySelector(".totalOne");
var addToBillBtn = document.querySelector(".addToBillBtn");

var textInstance = TextBill()

addToBillBtn.addEventListener("click", function() {
    textInstance.setStr(billTypeText.value)
    
    if(textInstance.getStr() === "call"){
        textInstance.makeCall()
    }

    if(textInstance.getStr() === "sms"){
        textInstance.sendSms()
    }

    callTotalOne.innerHTML = textInstance.getCallCost().toFixed(2)
    smsTotalOne.innerHTML = textInstance.getSmsCost().toFixed(2)
    totalOne.innerHTML = textInstance.getTotalCost().toFixed(2)

    totalOne.classList.add(textInstance.levels())

})
