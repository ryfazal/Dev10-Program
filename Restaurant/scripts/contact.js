/*
Creator: Ryan Fazal
Date Created: 02/07/2020
Project Name: Restaurant
*/

/* Validate in Javascript that data has been provided and give a message that the information is valid without submitting it anywhere */
function results(valid) {
    if (valid === true) {
        document.getElementById("results").innerText = "Your information is validated";
        document.getElementById("results").style.display = "block";

        return true;
    }
    else {
        document.getElementById("results").innerText = "";
        document.getElementById("results").style.display = "none";

        return false;
    }
}

/* Validation of entire Contact Form */
function validate(target) {
    var form = document.forms["contactForm"];

    /*  Correct user if they place a number in the name form */
    if (target === form["name"]) {
        if (isNaN(target.value) == false) {
            target.setCustomValidity("This field cannot contain a number");

            return false;
        }
        else {
            target.setCustomValidity("");

            return true;
        }
    }

    /* This is to see if the data provided is valid */
    else if (target === form["btnSubmit"]) {

        if (!HTMLFormElement.prototype.hasOwnProperty('reportValidity')) {
            if (form["name"] !=="" && form["email"] !== "" && form["phone"] !== "" && form["info"] !== "") {
                document.getElementById("results").innerText = "Data has been provided";
                document.getElementById("results").style.display = "block";
            }
            else {
                document.getElementById("results").innerText = "Please fill in all required fields";
                document.getElementById("results").style.display = "block";
            }
        }
        else if (form.reportValidity()) {
            results(true);
        }
        else {
            results(false);
        }
    }

    else {
        return true;
    }
}

/* Calls to the contact.html file */
function initialize() {
    var form = document.forms["contactForm"];

    /* This'll reset the form */
    form.reset();
    results(false);

    /* If provided information is correct, it will be validated*/
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        validate(form["btnSubmit"]);
    });

    /* This will validate the input value */
    form.addEventListener("blur", function(e) {
        validate(e.target);
    }, true);
}
