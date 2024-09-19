// step-1: event handling on "add money" button
// step-2: Get the amount of money the customer wants to add, get teeeeee 
// step-3: getcheck pin
// step-4: Get cuurent money/ avaliable balance
// step-5: Add the amount of money with the available balance, 
// step-6: which will be updated to the new current money, update it


// step-1: event handling on "add money" button inside the form

document.getElementById("btn-add-money").addEventListener('click', function (event) {
    console.log('money add btn clicked');
    event.preventDefault();

    // s-2: get money to be added to the account balance
    const addMoneyInput = document.getElementById("input-add-money").value;
    console.log(addMoneyInput);

    // get the pin number provided
    const pinNumberInput = document.getElementById("input-pin").value;
    console.log(pinNumberInput);

    // step-3: verify pin number
    // wrong way to validate

    if (pinNumberInput === "1234") {
        console.log("Adding money to your account");
        // s-4: get the current money
        const balance = document.getElementById("account-balance").innerText;
        console.log(balance);

        // step-5: add addMoneyInput with balance;
        const addMoneyNumber = parseFloat(addMoneyInput);
        let balanceNumber = parseFloat(balance);
        let newBalance = balanceNumber + addMoneyNumber;
        console.log(newBalance);

        // step-6: update the balance in the UI/DOM
        document.getElementById("account-balance").innerText = newBalance;


    }
        
    
    else {
        alert("Failed to add money. Please try again.")
    }
})