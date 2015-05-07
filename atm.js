$(document).ready(function(){

var currenttotal = 100;
$('#balance1').text('$' + currenttotal);

var savingstotal = 100;
$('#balance2').text('$' + savingstotal);

// Code for current account deposit and withdraw first


// Depositing

$("#deposit1").click(function(){
    
    //capture depo amount on click
    var depositamount = $("#amount1").val(); 
    console.log(depositamount);
    
    var accounttotal = Number(depositamount) + Number(currenttotal);
    currenttotal = accounttotal
    console.log(currenttotal);

    $('#balance1').text('$' + accounttotal);

});

// Withdrawing

$("#withdraw1").click(function(){
    
    var withdrawamount = $("#amount1").val(); 
    console.log(withdrawamount);
    
     

    var accounttotal = Number(currenttotal) - Number(withdrawamount);
    
    if (accounttotal >= 0){

    currenttotal = accounttotal;
    console.log(currenttotal);
    $('#balance1').text('$' + accounttotal);

  }

  else if (accounttotal < 0) {

    var accounttotal = Number(savingstotal) - Number(withdrawamount);
    $('#balance2').text('$' + accounttotal);

  // }

  }//endif

  // else {

  //   var accounttotal = Number(currenttotal) - Number(withdrawamount);
  //   currenttotal = accounttotal
  //   console.log(currenttotal);
  //   $('#balance1').text('$' + accounttotal);


  // }

});

//----------------SAVING NOW


$("#deposit2").click(function(){
    
    //capture depo amount on click
    var depositamount = $("#amount2").val(); 
    console.log(depositamount);
    
    var savaccounttotal = Number(depositamount) + Number(savingstotal);
   savingstotal = savaccounttotal
    console.log(savingstotal);

    $('#balance2').text('$' + savaccounttotal);

});

// Withdrawing

$("#withdraw2").click(function(){
    
    //capture depo amount on click
    var withdrawamount = $("#amount2").val(); 
    console.log(withdrawamount);
    
    var savaccounttotal = Number(savingstotal) - Number(withdrawamount);

//if statement checks total before update to check not going under 0
    if (savaccounttotal >= 0){
    savingstotal = savaccounttotal
    console.log(savingstotal);
    $('#balance2').text('$' + savaccounttotal);

  } //endif
 
else {alert('Cannot go below 0 in savings account')

  console.log('Below zero error')
}

});



//docready end
});