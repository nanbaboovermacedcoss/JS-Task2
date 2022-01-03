var obj={
         Hotal_Name : 'Taj',
         Room_Rate : 240.00,
         Discount_Percentage : 10,
          Discount_Rate : function(){
              var Discount = (this.Room_Rate*this.Discount_Percentage)/100;
              return this.Room_Rate-Discount;
            }
        };
        document.write("<div id='headerDiv'>");
        
        document.write( '<b>Hotal name = </b>' +'<b class="value">' +obj['Hotal_Name']+ '</b>' +'<br>');
        document.write('<b>Room rate = </b>' +'<b class="value">' +'Rs.'+obj['Room_Rate']+ '</b>' +'<br>');
        document.write('<b>Discount rate = </b>' +'<b class="value">' +'Rs.'+obj.Discount_Rate() + '</b>');   
        document.write('</div>')
     
    
        var time = new Date();
        var weekName = ["Sunday","Monday","Tuesday","Wednesday","Thirsday","Friday","Saturday"]
        var monthName = ["January","February","March","April","May","June","July","August","Septembet","October","November","December"];
        document.write("<p class='offer comman'>Offer expires next " + '<mark> ' + weekName[time.getDay()] + '</mark>' + "</p>");
       // var Todate = (time.getDate());
          time.setDate(time.getDate() + 7);

         var d = (time.getDate());
        document.write('<div id="month" class="comman">');
         document.write( '( ' +d + ' ');
        document.write(monthName[time.getMonth()]  +' '+ time.getFullYear() + ' )');
        document.write('</div>');
    
        
       
    
       