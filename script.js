let currentQuestion = 0;

const questions = [
    "Do you love me??",
    "Are you sure??",
    "Really??",
    "Like, really really??",
    "Are you absolutely sure??",
    "Do you want to say yes??",
    "Last chance, do you love me??"
];

const questionDiv = document.getElementById("question");
const yesButton = document.getElementById("yesBtn");
const noButton = document.getElementById("noBtn");

function showQuestion() {
    if (currentQuestion < questions.length) {
        questionDiv.innerHTML = questions[currentQuestion];
    } else {
        questionDiv.innerHTML = "I LOVE YOU TOO BABE🕺🏻🎀💕.. THANK YOU SO SOO SOOO MUCHHH FOR LOVING ME";
        document.body.style.backgroundImage = "url('https://www.pinterest.com/pin/45950858691685707/')"; // Replace with a valid image URL
        document.body.style.backgroundSize = "cover";
        yesButton.style.display = "none";
        noButton.style.display = "none";
    }
}

yesButton.addEventListener("click", () => {
    questionDiv.innerHTML = "I LOVE YOU TOO BABE🕺🏻🎀💕.. THANK YOU SO SOO SOOO MUCHHH FOR LOVING ME";
    document.body.style.backgroundImage = "url('https://www.pinterest.com/pin/45950858691685707/')"; // Replace with a valid image URL
    document.body.style.backgroundSize = "cover";
    yesButton.style.display = "none";
    noButton.style.display = "none";
});

noButton.addEventListener("click", () => {
    currentQuestion++;
    showQuestion();
});

showQuestion();
