  function textBill() {
    var call = 0;
    var sms = 0;
    var total = 0;
   


    function billText(text){
     
        if(text =='call'){
            call += 2.75;
            total += 2.75;
           
        }
        else if (text== 'sms'){
         sms += 0.75;
         total += 0.75;
        }

    }

    
    function callTotal(){
        return 'R' + call;

    }
    function smsTotal(){
        return 'R' + sms;

    }
    

    function billTotal(){
        return 'R' + total;


    }

    function level(){
        if (total >= 30 && total < 50){
            return 'warning';
        }
        else if (total >= 50) {
            return 'critical';
        }
        else{
            return '';
        }
    }


    
    return{
       
        billText, 
        callTotal,
        smsTotal, 
        billTotal,
        level
       
        
    }
}