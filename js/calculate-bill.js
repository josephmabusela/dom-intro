var calculateBtn = document.querySelector(".calculateBtn");
var billString = document.querySelector(".billString");
var billTotals = document.querySelector(".billTotal");

var calculateInstance = totalPhoneBill(); 

function totalPhoneBill(){

  calculateInstance.setInputString(billString.value);
  calculateInstance.billText();
  
  calculateBtn.innerHTML = calculateInstance.billTotal().toFixed(2);
  billTotals.classList.add(calculateInstance.totallevel());
  // var strItems = str.split(",");
  // console.log(strItems);
  
  // var total = 0;
  
  // strItems.forEach(strItem => {
  //   strItem.trim();
  //     if (strItem === "call"){
  //       total += 2.75;
  //     }
  //     else if (strItem === "sms"){
  //       total += 0.75;
  //     }
  // });
  
  // return total;
}

function totalButton(){
    
  var str = billString.value; 
  var bill = totalPhoneBill(str);
  
  var roundNum = bill.toFixed(2);

  if (roundNum > 20.00) {
    billTotals.classList.add("warning");
    
  }
  if (roundNum > 30.00){
    billTotals.classList.add("danger");
    billTotals.classList.remove("warning");

  }
  if (roundNum < 30.00){
    billTotals.classList.remove("danger");
  }
  if (roundNum < 20.00) {
    billTotals.classList.remove("warning");
    billTotals.classList.remove("danger");
  }
  else {
    billTotals.classList.add("billTotals");   
  }

  billTotals.innerHTML = roundNum;
}

calculateBtn.addEventListener("click", totalButton)