function checkSms() {
    let msgCount = document
        .getElementById("smsnotifications")
        .getElementsByClassName("badge badge-notify")[0];

    // Opens the SMS chat in a new window
    function openPage() {
        window.open(
            "https://app.omnique.com/company/427900/shop/1/messaging",
            "_blank"
        );
    }

    console.log(msgCount.innerHTML, msgCount);

    // This alerts the console of new messages
    if (msgCount.innerHTML === "0") {
        console.log("No New SMS");
    } else {
        console.log("You got SMS!");

        openPage();

        return;
    }
    console.log("The SMS count is", msgCount.innerHTML);
}

// checks for new email upon reload
function checkEmail() {
    let msgCount = document
        .getElementById("emailnotifications")
        .getElementsByClassName("badge badge-notify")[0];

    // Opens the E-mail in a new window
    function openPage() {
        window.open(
            "https://webmail.omnique.com/a/webmail.php?wsid=3a1cfe9de638481fba6754ed256494ef-29908f6d860448feb07208ef33020759",
            "_blank"
        );
    }

    console.log(msgCount.innerHTML, msgCount);

    // This alerts the console of new messages
    if (msgCount.innerHTML === "") {
        console.log("No New E-mail");
        console.log("The E-mail count is 0");
    } else {
        console.log("You got E-mail!");
        console.log("The E-mail count is", msgCount.innerHTML);

        openPage();
    }

    return;
}

//chrome.extension.onMessage.addListener(request, checkEmail());
console.log("Hello form the background");
