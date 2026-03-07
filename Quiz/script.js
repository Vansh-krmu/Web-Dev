const questions = [
    {
        question: "Which type of data is considered personally identifiable information?",
        options: [
            "Browser type",
            "IP address",
            "Screen resolution",
            "Operating system"
        ],
        answer: 1
    },
    {
        question: "What does end-to-end encryption ensure?",
        options: [
            "Faster internet speeds",
            "Only sender and receiver can read messages",
            "Messages are backed up online",
            "Passwords are stored securely"
        ],
        answer: 1
    },
    {
        question: "Which online activity leaves the largest digital footprint?",
        options: [
            "Reading articles",
            "Using private browsing mode",
            "Posting on social media",
            "Clearing browser cache"
        ],
        answer: 2
    },
    {
        question: "What is the primary purpose of cookies on websites?",
        options: [
            "Block advertisements",
            "Improve hardware performance",
            "Store user preferences and sessions",
            "Prevent hacking attempts"
        ],
        answer: 2
    },
    {
        question: "Which practice improves personal online privacy the most?",
        options: [
            "Using the same password everywhere",
            "Disabling two-factor authentication",
            "Regularly updating passwords",
            "Sharing location publicly"
        ],
        answer: 2
    },
    {
        question: "What is metadata?",
        options: [
            "Encrypted data",
            "Data that describes other data",
            "Deleted information",
            "Temporary cache files"
        ],
        answer: 1
    },
    {
        question: "Why are public Wi-Fi networks considered risky?",
        options: [
            "They are slower than private networks",
            "They reduce device battery life",
            "Data can be intercepted by others",
            "They limit website access"
        ],
        answer: 2
    },
    {
        question: "Which tool is commonly used to mask a user's IP address?",
        options: [
            "Firewall",
            "VPN",
            "Antivirus",
            "Cookie blocker"
        ],
        answer: 1
    },
    {
        question: "What does phishing attempt to do?",
        options: [
            "Improve account security",
            "Encrypt personal files",
            "Trick users into revealing sensitive information",
            "Block malicious websites"
        ],
        answer: 2
    },
    {
        question: "Why is two-factor authentication effective?",
        options: [
            "It removes the need for passwords",
            "It adds an extra layer of verification",
            "It speeds up login times",
            "It stores credentials offline"
        ],
        answer: 1
    }
];

let currentQuestion = 0;
let score = 0;

const intro = document.getElementById("intro");
const quiz = document.getElementById("quiz");
const result = document.getElementById("result");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");
const feedbackEl = document.getElementById("feedback");
const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");

startBtn.addEventListener("click", () => {
    intro.classList.add("hidden");
    quiz.classList.remove("hidden");
    loadQuestion();
});

function loadQuestion() {
    questionEl.textContent = questions[currentQuestion].question;
    optionsEl.innerHTML = "";

    questions[currentQuestion].options.forEach((option, index) => {
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "option";
        input.value = index;

        label.appendChild(input);
        label.appendChild(document.createTextNode(option));
        optionsEl.appendChild(label);
    });
}

nextBtn.addEventListener("click", () => {
    const selected = document.querySelector("input[name='option']:checked");
    if (!selected) return;

    if (parseInt(selected.value) === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    quiz.classList.add("hidden");
    result.classList.remove("hidden");
    scoreEl.textContent = `Your Score: ${score} / ${questions.length}`;

    if (score >= 8) {
        feedbackEl.textContent = "Excellent awareness!";
    } else if (score >= 5) {
        feedbackEl.textContent = "Good understanding!";
    } else {
        feedbackEl.textContent = "Needs improvement!";
    }
}

restartBtn.addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;
    result.classList.add("hidden");
    quiz.classList.remove("hidden");
    loadQuestion();
});
