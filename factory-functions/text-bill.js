function TextBill() {
    var textStr;
    var call = 0
    var sms = 0

    function setStr(str){
        textStr = str
    }

    function getStr(){
        return textStr
    }

    function makeCall(){
        call += 2.75
    }

    function sendSms(){
        sms += 0.75
    }

    function getCallCost() {
        return call
    }

    function getSmsCost(){
        return sms
    }

    function getTotalCost(){
        return call + sms
    }

    function levels(){
        
        if(getTotalCost() >= 30 && getCallCost() <= 50){
            return 'warning'
        }

        if(getTotalCost() >= 50){
            return 'danger'
        }
    }

    return {
        setStr,
        getStr,
        makeCall,
        getCallCost,
        sendSms,
        getSmsCost,
        getTotalCost,
        levels
    }
}