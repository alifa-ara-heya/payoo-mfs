// step-1: event handling on "add money" button
// step-2: check pin
// step-3: Get the amount of money the customer wants to add
// step-4: Get cuurent money/ avaliable balance
// step-5: Add the amount of money with the available balance, 
// step-6: which will be updated to the new current money, update it


// step-1: event handling on "add money" button inside the form

document.getElementById("btn-add-money").   addEventListener('click', function(event){
    console.log('money add btn clicked');
    event.preventDefault();

    // s-2: get money to be added to the account balance
    const addMoneyInput = document.getElementById("input-add-money").value;
    console.log(addMoneyInput);

    // get the pin number provided
    const pinNumberInput = document.getElementById("input-pin").value;
    console.log(pinNumberInput);
})