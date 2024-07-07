document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');

    const quizQuestions = [
        {
            question: "What basic equipment is needed to start playing cricket?",
            answers: {
                A: "Baseball Bat, Baseball, Helmet",
                B: "Cricket Bat, Cricket Ball, Stumps and Bails, Protective Gear",
                C: "Hockey Stick, Hockey Ball, Gloves"
            },
            correctAnswer: "B"
        },
        {
            question: "Which of the following is a beginner tip for getting started in cricket?",
            answers: {
                A: "Focus only on batting and ignore fielding practice",
                B: "Participate in local matches or join a cricket club to gain match experience",
                C: "Learn the rules after mastering all the skills",
                D: "Avoid watching professional matches to develop your own style"
            },
            correctAnswer: "B"
        }
    ];

    function buildQuiz() {
        const output = [];

        quizQuestions.forEach((currentQuestion, questionNumber) => {
            const answers = [];
            for (let letter in currentQuestion.answers) {
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                    </label>`
                );
            }

            output.push(
                `<div class="question">${currentQuestion.question}</div>
                <div class="answers">${answers.join('')}</div>`
            );
        });

        quizContainer.innerHTML = output.join('');
    }

    function showResults() {
        const answerContainers = quizContainer.querySelectorAll('.answers');
        let numCorrect = 0;

        quizQuestions.forEach((currentQuestion, questionNumber) => {
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if (userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;
                answerContainers[questionNumber].style.color = 'green';
            } else {
                answerContainers[questionNumber].style.color = 'red';
            }
        });

        resultsContainer.innerHTML = `${numCorrect} out of ${quizQuestions.length}`;
    }

    buildQuiz();

    submitButton.addEventListener('click', showResults);
});

document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-btn");
    const navMenu = document.getElementById("nav-menu");

    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
});