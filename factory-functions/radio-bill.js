function radioBill() {
    var call = 0;
    var sms = 0;
    var totals = 0;
   


    function radioItem(option){
     

        if(option == 'call'){
            call += 2.75;
            totals += 2.75;
           
        }
        else if (option == 'sms'){
         sms += 0.75;
         totals += 0.75;
         

        }

    }
    function radioCallTotal(){
        return 'R' + call;

    }
    function radioSmsTotal(){
        return 'R' + sms;

    }


    function radioTotal(){
 
        return 'R' + totals;


    }

    function levels(){
        if (totals >= 30 && totals < 50){
            return 'warning';
        }
        else if ( totals >= 50) {
            return 'critical';
        }
        else {
            return '';
        }
    }


    
    return { 
       
        radioItem,  
        radioCallTotal,
        radioSmsTotal,
        radioTotal,
        levels
       
        
    }
}