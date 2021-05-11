function radioBill() {
    var radioStr;
    var call = 0;
    var sms = 0;

    function setRadioInput(str) {
        radioStr = str
    }

    function gettRadioInput() {
        return radioStr
    }

    function makeCall() {
        call += 2.75;
    }

    function sendSms() {
        sms += 0.75;
    }

    function getCallTotal() {

        return call
    }

    function getSmsTotal() {
        return sms
    }

    function radioTotal() {
        return call + sms;

    }

    function levels(){
        if (radioTotal() >= 30 && radioTotal() < 50){
            return 'warning';
        }
        if (radioTotal() >= 50) {
            return 'danger';
        }
    }

    
    return { 
       
        makeCall,
        sendSms,
        setRadioInput,
        gettRadioInput,  
        getCallTotal,
        getSmsTotal,
        radioTotal,
        levels
    }
}