// step- 1: setting eventhandler
document.getElementById("button-login").
    addEventListener('click', function(event){
        event.preventDefault(); //to stop reloading the page when submitting

        // step-2: get the phone and pin number
        const phoneNumber = document.getElementById("phone-number").value;
        const pinNumber = document.getElementById("pin-number").value;
        console.log(phoneNumber, pinNumber);

        // validating phone and pin number
        // following is temporary way
        if (phoneNumber === '5' && pinNumber === "2"){
            console.log("You are logged in");

            // step-5: allow the user to use the website
            window.location.href="./home.html";

        } else{
            alert('Wrong phone number or pin');
        }
    })