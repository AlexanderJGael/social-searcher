var emailInput = document.querySelector(".input");
var submitButton = document.querySelector("#submit");



function switchRed() {
    document.getElementById("submit").style.backgroundColor = "red"
};

function switchGreen() {
    document.getElementById("submit").style.backgroundColor = "green"
            halfSeconds = 1;
}

function removeGoodMsg() {
    $("strong").remove();
}

var halfSeconds = 1;
//function that turns the button red for a half second, then switches back to green.
function badSubmit() {
    switchRed();
    console.log(localStorage.getItem("email"));
    var countBack = setInterval(function() {
        halfSeconds--;

        if(halfSeconds === 0) {
            clearInterval(countBack);
            switchGreen();
        } 
    }, 500);
}
    function goodSubmit() {
        $("button").append("<strong>Success!</strong>");
        var otherCount = setInterval(function(){
            halfSeconds--;

            if (halfSeconds === 0) {
                clearInterval(otherCount);
                removeGoodMsg();
            }
        }, 500);
        
    }



//create an item for local storage called "email" 

submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    const currentSubscribers = JSON.parse(localStorage.getItem("subscribers")) || []
    const newSubscriber = {
        email:emailInput.value, 
        subscribeTo: ""

    }
     if (newSubscriber.email === "") {

        badSubmit();
    } else {
        goodSubmit();
        currentSubscribers.push(newSubscriber);
        localStorage.setItem("subscribers", JSON.stringify(currentSubscribers));
    }
    
    
});



