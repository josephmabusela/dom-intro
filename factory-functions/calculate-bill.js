function calculateBill(){
    var call = 0;
    var sms = 0;
    var totalBill = 0;
    var warningLevel = 20;
    var criticalLevel = 30;

    function billText(list){
      var  text  = list.split(",");
       for (var i = 0; i < text.length; i++){
            var str = text[i].trim();

        if (str === 'call'){
            call += 2.75;
            totalBill += 2.75;

        }
        else if (str === 'sms'){
         sms += 0.75;
         totalBill += 0.75;

        }

    }
} 
    function billTotal(){
        return 'R' + totalBill;
    }
    
    function totallevel(){
        if (totalBill >= warningLevel && totalBill < criticalLevel){
            return 'warning';
        }
        if (totalBill >= criticalLevel) {
            return 'critical';
        }
        else {
            return '';
        }

    }

    return{
       
        billText,
        billTotal,
        totallevel 
    }
}