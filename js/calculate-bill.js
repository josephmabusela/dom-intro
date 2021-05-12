var calculateBtn = document.querySelector(".calculateBtn");
var billString = document.querySelector(".billString");
var billTotals = document.querySelector(".billTotal");

var calculateInstance = CalculateBill();

//create the function that will be called when the calculate button is pressed
function totalButton() {
    calculateInstance.setInput(billString.value);
    calculateInstance.getInput();
    calculateInstance.splitStr();
    calculateBtn.innerHTML = calculateInstance.billTotal().toFixed(2);

    calculateBtn.classList.remove(calculateInstance.levels());
    calculateBtn.classList.add(calculateInstance.levels());
}

calculateBtn.addEventListener("click", function() {

    
        calculateInstance.setInput(billString.value);
        calculateInstance.getInput();
        calculateInstance.splitStr();
        billTotals.innerHTML = calculateInstance.getTotalCost().toFixed(2);

        billTotals.classList.add(calculateInstance.levels());
});