//DOM Elements
var emailInput = document.querySelector("#email");
var submitButton = document.querySelector("#submit");
var formCardTitle = document.querySelector("card-title")


//function that turns the button red for a half second, then switches back to green.
function badSubmit() {
    switchRed();
    setTimeout(function () {
        switchGreen();
    }, 1000);

    function switchRed() {
        document.getElementById("#submit-email").style.backgroundColor = "red"
    };

    function switchGreen() {
        document.getElementById("submit").style.backgroundColor = "green"
    }
}

//function that replaces the "buy now" with "success" when pressed with an email in the input
function goodSubmit() {
    document.getElementById("submit").textContent = "Success!"

    setTimeout(function () {
        document.getElementById("submit").textContent = "Submit"
    }, 1000);
}

//when you click the "Submit" button, starts an event that stores your email and who you're subscribed to.
submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    const currentSubscribers = JSON.parse(localStorage.getItem("subscribers")) || []
    const newSubscriber = {
        email: emailInput.value,
        subscribeTo: document.getElementById("youtubeEmbed").dataset.channel
    }
    //if you leave the input empty, it triggers a function that turns the button red for a second
    emailInput.value = ""

    if (newSubscriber.email.includes("@gmail.com") || newSubscriber.email.includes("@yahoo.com")) {
        //if you put your email in the input, it will show a "success" message 
        goodSubmit();
        currentSubscribers.push(newSubscriber);
        localStorage.setItem("subscribers", JSON.stringify(currentSubscribers));
        confirmMessage();
    } else {
        badSubmit();
    }
});

//Create a function that displays a confirm message when the email is submitted.
function confirmMessage() {
    $("#email").addClass("hidden");
    $("#submit").addClass("hidden");
    document.querySelector("#signup-card-title").textContent = "Your email has been signed up!"
}