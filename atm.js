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
    
    //capture depo amount on click
    var withdrawamount = $("#amount1").val(); 
    console.log(withdrawamount);
    
    var accounttotal = Number(currenttotal) - Number(withdrawamount);
    currenttotal = accounttotal
    console.log(currenttotal);

    $('#balance1').text('$' + accounttotal);

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
    savingstotal = savaccounttotal
    console.log(savingstotal);

    $('#balance2').text('$' + savaccounttotal);

});



//docready end
});