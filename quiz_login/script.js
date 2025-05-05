document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz');
    const resultContainer = document.getElementById('result');
    const questionElement = document.getElementById('question');
    const answerElements = [
        document.getElementById('a'),
        document.getElementById('b'),
        document.getElementById('c'),
        document.getElementById('d')
    ];
    const answerTextElements = [
        document.getElementById('a_text'),
        document.getElementById('b_text'),
        document.getElementById('c_text'),
        document.getElementById('d_text')
    ];
    const timerElement = document.getElementById('timer');
    const progressElement = document.getElementById('progress');
    const submitButton = document.getElementById('submit');
    const restartButton = document.getElementById('restart');
    const scoreTextElement = document.getElementById('score-text');
    const timeTextElement = document.getElementById('time-text');

    let currentQuestionIndex = 0;
    let score = 0;
    let timeLeft = 60;
    let timer;
    let userAnswers = [];

    // Quiz questions
    const questions = [
        {
            question: "What is the Sort Form of Bangladesh Univercity of Business and Technology ?",
            answers: {
                a: "BUET",
                b: "BEUT",
                c: "BUBT",
                d: "BUTB"
            },
            correctAnswer: "c"
        },

        {
            question: "What is the capital of bangladesh?",
            answers: {
                a: "London",
                b: "Dhaka",
                c: "Berlin",
                d: "Madrid"
            },
            correctAnswer: "b"
        },
        {
            question: "Which planet is known as the Red Planet?",
            answers: {
                a: "Venus",
                b: "Mars",
                c: "Jupiter",
                d: "Saturn"
            },
            correctAnswer: "b"
        },
        {
            question: "What is the largest mammal?",
            answers: {
                a: "Elephant",
                b: "Blue Whale",
                c: "Giraffe",
                d: "Polar Bear"
            },
            correctAnswer: "b"
        },
        {
            question: "Which language runs in a web browser?",
            answers: {
                a: "Java",
                b: "C",
                c: "Python",
                d: "JavaScript"
            },
            correctAnswer: "d"
        },
        {
            question: "What year was JavaScript launched?",
            answers: {
                a: "1996",
                b: "1995",
                c: "1994",
                d: "None of the above"
            },
            correctAnswer: "b"
        },
        {
            question: "What does HTML stand for?",
            answers: {
                a: "Hypertext Markup Language",
                b: "Hypertext Markdown Language",
                c: "Hyperloop Machine Language",
                d: "Helicopters Terminals Motorboats Lamborginis"
            },
            correctAnswer: "a"
        },
        {
            question: "Which of these is a JavaScript framework?",
            answers: {
                a: "Django",
                b: "Flask",
                c: "React",
                d: "Laravel"
            },
            correctAnswer: "c"
        },
        {
            question: "What does CSS stand for?",
            answers: {
                a: "Cascading Style Sheets",
                b: "Colorful Style Sheets",
                c: "Computer Style Sheets",
                d: "Creative Style Sheets"
            },
            correctAnswer: "a"
        },
        {
            question: "Which symbol is used for single line comments in JavaScript?",
            answers: {
                a: "//",
                b: "/*",
                c: "#",
                d: "--"
            },
            correctAnswer: "a"
        },
        {
            question: "Which operator is used to assign a value to a variable?",
            answers: {
                a: "*",
                b: "-",
                c: "=",
                d: "x"
            },
            correctAnswer: "c"
        }
    ];

    // Initialize quiz
    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        timeLeft = 60;
        userAnswers = [];
        quizContainer.style.display = 'block';
        resultContainer.style.display = 'none';
        startTimer();
        showQuestion();
    }

    // Start timer
    function startTimer() {
        clearInterval(timer);
        timer = setInterval(() => {
            timeLeft--;
            timerElement.textContent = `Time: ${timeLeft}s`;

            if (timeLeft <= 0) {
                clearInterval(timer);
                showResults();
            }
        }, 1000);
    }

    // Display current question
    function showQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;

        for (let i = 0; i < answerElements.length; i++) {
            const answerKey = String.fromCharCode(97 + i); // 'a', 'b', 'c', 'd'
            answerTextElements[i].textContent = currentQuestion.answers[answerKey];
            answerElements[i].checked = false;
        }

        progressElement.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
    }

    // Check selected answer
    function checkAnswer() {
        let selectedAnswer = null;

        for (let i = 0; i < answerElements.length; i++) {
            if (answerElements[i].checked) {
                selectedAnswer = String.fromCharCode(97 + i); // 'a', 'b', 'c', 'd'
                break;
            }
        }

        // Store user's answer (even if none selected)
        userAnswers[currentQuestionIndex] = selectedAnswer || 'none';

        // Check if answer is correct
        if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
            score++;
        }

        // Move to next question or show results
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            clearInterval(timer);
            showResults();
        }
    }

    // Show results
    function showResults() {
        quizContainer.style.display = 'none';
        resultContainer.style.display = 'block';
        scoreTextElement.textContent = `Your score: ${score}/${questions.length}`;
        timeTextElement.textContent = `Time remaining: ${timeLeft}s`;
    }

    // Event listeners
    submitButton.addEventListener('click', checkAnswer);
    restartButton.addEventListener('click', startQuiz);

    // Start the quiz when page loads
    startQuiz();
});