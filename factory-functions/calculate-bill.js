function CalculateBill() {

    var inputString;
    var splitStr;
    const setInput = (str) => {
        inputString = str;
    }

    function getInput() {
        return inputString;
    }

    function splitStr(){
        splitStr = inputString.split(",");
        return splitStr
    }

    function getTotal(){
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

        if(getTotal() >= 20 && getTotal() <= 30){
            return "warning";
        }

        if(getTotal() >= 30){
            return "danger"
        }
    }

    return {
        setInput,
        getInput,
        getTotal,
        splitStr,
        levels
        
    }
}