// show the cashout form

document.getElementById("btn-show-cash-out").addEventListener('click', function(){
    // show cashout btn clicked

    // console.log('cash out btn clicked');
    document.getElementById("cash-out-form").classList.remove('hidden');
    document.getElementById("add-money-form").classList.add('hidden');
})

// show addmoney form and hide the cashout form
document.getElementById("btn-show-add-money").addEventListener('click', function(){
    
    // show addmoney btn clicked
    // console.log("add money btn clicked");
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('add-money-form').classList.remove('hidden');
})