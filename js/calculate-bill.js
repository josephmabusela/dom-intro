var calculateBtn = document.querySelector(".calculateBtn");
var billString = document.querySelector(".billString");
var billTotals = document.querySelector(".billTotal");

var calculateInstance = CalculateBill();

//create the function that will be called when the calculate button is pressed
function totalButton() {
    calculateInstance.setInputString(billString.value);
    calculateInstance.getInputString();
    calculateInstance.splitString();
    calculateBtn.innerHTML = calculateInstance.billTotal().toFixed(2);


    calculateBtn.classList.add(calculateInstance.totallevel());
    calculateBtn.classList.remove(calculateInstance.totallevel());
}

calculateBtn.addEventListener("click", function() {

    
        calculateInstance.setInputString(billString.value);
        calculateInstance.getInputString();
        calculateInstance.splitString();
        billTotals.innerHTML = calculateInstance.getTotalCost().toFixed(2);

        //billTotals.classList.remove(calculateInstance.levels());
        billTotals.classList.add(calculateInstance.levels());
});