// step- 1: setting eventhandler
document.getElementById("button-login").
    addEventListener('click', function(event){
        event.preventDefault(); //to stop reloading the page when submitting
        console.log('testing');
        // step-2: get the phone number
        const phoneNumber = document.getElementById("phone-number").value;
        console.log(phoneNumber);
    })