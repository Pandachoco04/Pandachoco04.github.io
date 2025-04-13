const messages = [
    "WEH DI NGA",
    "Really sure??",
    "CRUSH MO ::LANG AKO",
    "FUCK YOU",
    "MAG YES KA KINGINAMO",
    "FUCK YOUUUUUUUUU",
    "INAKA",
    "MAKAKARMA KA RIN",
    "SINUNGGALING",
    "BAHALA KA SA BUHAY MO"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
