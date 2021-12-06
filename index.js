const greetingDisplay = document.getElementById("greeting-display")
const des1 = document.querySelector('.description')
const des2 = document.querySelector('.message-print')

const btn = document.getElementById("btn")
const printArea = document.querySelector(".message-print")
const bauble = document.getElementById("bauble")
const snder = document.querySelector(".from")
const recipient = document.querySelector(".receiver")
btn.addEventListener("click", writeGreeting)

const greetings = [
    "New year is coming !",
    "We wish you a Happy New Year!",
    "Happy holidays!",
    "Ho, ho, ho! Happy New Year!",
    "Ho, ho, ho! Guess who is back!",
    "Ho, ho, ho! You got 100$!!",
    "Jingle all the way!",
]

function writeGreeting() {
    des1.style.display = "none";
    des2.style.display = "none";

    let randomNumber = Math.floor(Math.random() * greetings.length)
    // console.log(greetings[randomNumber])
    let senderVar = snder.value
    let recipientrVar = recipient.value

    if (senderVar == "" && recipientrVar == "") {
        greetingDisplay.textContent = `${greetings[randomNumber]}`
    } else if (recipientrVar == "") {
        greetingDisplay.textContent = `To ${senderVar} ${greetings[randomNumber]}`
    } else if (senderVar == "") {
        greetingDisplay.textContent = `${greetings[randomNumber]} from ${recipientrVar}`
    } else {
        greetingDisplay.innerHTML = `To ${senderVar} ${greetings[randomNumber]} from ${recipientrVar}`
    }

    // snder.placeholder = `last sender is ${senderVar}`
    // recipient.placeholder = `last sender is ${recipientrVar}`
    snder.value = ""
    recipient.value = ""
}

// Task:
// Write a function to display a random greeting in the card.

// Stretch goals:
// - Allow the user to input to and from names.
// - Add an input for custom messages.