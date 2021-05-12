function CalculateBill() {

    var inputString;
    var splitStr;
    const setInputString = (string) => {
        inputString = string;
    }

    function getInputString() {
        return inputString;
    }

    function splitString(){
        splitStr = inputString.split(",");
        return splitStr
    }

    function getTotalCost(){
        var total = 0;
        for(var i = 0; i < splitStr.length; i++){
            var bill = splitStr[i].trim();
           if(bill === "call"){
               total += 2.75
           }

           if(bill === "sms"){
               total += 0.75
           }
        }
        return total;
    }

    function levels(){

        if(getTotalCost() >= 20 && getTotalCost() <= 50){
            return "warning";
        }

        if(getTotalCost() >= 30){
            return "danger"
        }
    }

    return {
        setInputString,
        getInputString,
        getTotalCost,
        splitString,
        levels
        
    }
}