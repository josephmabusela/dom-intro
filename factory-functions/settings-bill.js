  function billSettings(){

    var theCallCost = 0;
    var theSmsCost = 0;
    var warning = 0;
    var critical = 0;
    var callCostTotal = 0;
    var smsCostTotal = 0;
    var totalCost = 0;
    
    function setCallCost(callCost){
        theCallCost = callCost;
    }

    function getCallCost(){
        return theCallCost;
    }
    function setSmsCost(smsCost){
        theSmsCost = smsCost;
    }

    function getSmsCost(){
        return theSmsCost;
    }

    function setWarning(warninglevel){
       warning = warninglevel;
    }

    function getWarning(){
        return warning;
    }
    function setCritical(criticalLevel){
       critical = criticalLevel;
    }

    function getCritical(){
        return critical;
    }
    function makeCall(){

        if (!hasReachedCriticalLevel()){
        callCostTotal += theCallCost;
        totalCost += theCallCost;
        }

    }

    function hasReachedCriticalLevel(){
        return totalCost >= critical;

    }

    function sendSms(){

        if (!hasReachedCriticalLevel()){
        smsCostTotal += theSmsCost;
        totalCost += theSmsCost;
        }


    }
    function getTotalCost(){
        return totalCost; 
    }

    function getTotalCallCost(){
        return callCostTotal;
    }

    function getTotalSmsCost(){
        return smsCostTotal;
    }
    
    function levels(){

        if( totalCost >= warning && totalCost < critical){
            return 'warning';
        }
        
         else if (hasReachedCriticalLevel){
            return 'critical';
        } 
    }

    return{
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        getWarning,
        setWarning,
        getCritical,
        setCritical,
        hasReachedCriticalLevel,
        makeCall,
        sendSms,
        getTotalCost,
        getTotalCallCost,
        getTotalSmsCost,
        levels
    }
}