// Data Structure for Subjects, Lessons, and Questions
const data = {
    Physics: {
        1: [
            {
                question: "What is the speed of light?",
                answers: [
                    { text: "299,792 km/s", correct: true },
                    { text: "150,000 km/s", correct: false },
                    { text: "108,000 km/s", correct: false },
                    { text: "1,000,000 km/s", correct: false }
                ]
            },
            {
                question: "Which of the following is Newton's First Law of Motion?",
                answers: [
                    { text: "Force equals mass times acceleration", correct: false },
                    { text: "For every action, there is an equal and opposite reaction", correct: false },
                    { text: "An object in motion stays in motion unless acted on by an external force", correct: true },
                    { text: "The force of gravity is inversely proportional to the square of the distance", correct: false }
                ]
            },
            {
                question: "What is the unit of electric current?",
                answers: [
                    { text: "Watt", correct: false },
                    { text: "Volt", correct: false },
                    { text: "Ampere", correct: true },
                    { text: "Ohm", correct: false }
                ]
            }
        ],
        2: [
            {
                question: "What is the formula for kinetic energy?",
                answers: [
                    { text: "KE = 1/2 mv²", correct: true },
                    { text: "KE = mv", correct: false },
                    { text: "KE = mgh", correct: false },
                    { text: "KE = 2mgh", correct: false }
                ]
            },
            {
                question: "Who developed the theory of relativity?",
                answers: [
                    { text: "Isaac Newton", correct: false },
                    { text: "Albert Einstein", correct: true },
                    { text: "Nikola Tesla", correct: false },
                    { text: "Galileo Galilei", correct: false }
                ]
            },
            {
                question: "What is the value of acceleration due to gravity on Earth?",
                answers: [
                    { text: "9.8 m/s²", correct: true },
                    { text: "10 m/s²", correct: false },
                    { text: "8.5 m/s²", correct: false },
                    { text: "15 m/s²", correct: false }
                ]
            }
        ]
    },
    Chemistry: {
        1: [
            {
                question: "What is the chemical formula for water?",
                answers: [
                    { text: "H2O", correct: true },
                    { text: "CO2", correct: false },
                    { text: "O2", correct: false },
                    { text: "HO2", correct: false }
                ]
            },
            {
                question: "What is the atomic number of oxygen?",
                answers: [
                    { text: "6", correct: false },
                    { text: "8", correct: true },
                    { text: "10", correct: false },
                    { text: "12", correct: false }
                ]
            },
            {
                question: "What is the pH level of a neutral solution?",
                answers: [
                    { text: "7", correct: true },
                    { text: "5", correct: false },
                    { text: "9", correct: false },
                    { text: "12", correct: false }
                ]
            }
        ],
        2: [
            {
                question: "What is the most abundant gas in Earth's atmosphere?",
                answers: [
                    { text: "Oxygen", correct: false },
                    { text: "Nitrogen", correct: true },
                    { text: "Carbon Dioxide", correct: false },
                    { text: "Hydrogen", correct: false }
                ]
            },
            {
                question: "Which element is represented by the symbol 'Au'?",
                answers: [
                    { text: "Silver", correct: false },
                    { text: "Gold", correct: true },
                    { text: "Aluminum", correct: false },
                    { text: "Copper", correct: false }
                ]
            },
            {
                question: "What is the chemical formula for table salt?",
                answers: [
                    { text: "NaCl", correct: true },
                    { text: "KCl", correct: false },
                    { text: "Na2CO3", correct: false },
                    { text: "CaCl2", correct: false }
                ]
            }
        ]
    },
    Biology: {
        1: [
            {
                question: "What is the powerhouse of the cell?",
                answers: [
                    { text: "Nucleus", correct: false },
                    { text: "Mitochondria", correct: true },
                    { text: "Ribosome", correct: false },
                    { text: "Golgi apparatus", correct: false }
                ]
            },
            {
                question: "Which organ is responsible for filtering blood?",
                answers: [
                    { text: "Heart", correct: false },
                    { text: "Kidneys", correct: true },
                    { text: "Liver", correct: false },
                    { text: "Lungs", correct: false }
                ]
            },
            {
                question: "What type of cell division produces two identical daughter cells?",
                answers: [
                    { text: "Mitosis", correct: true },
                    { text: "Meiosis", correct: false },
                    { text: "Binary fission", correct: false },
                    { text: "Budding", correct: false }
                ]
            }
        ],
        2: [
            {
                question: "Which blood type is the universal donor?",
                answers: [
                    { text: "O-", correct: true },
                    { text: "A+", correct: false },
                    { text: "B+", correct: false },
                    { text: "AB+", correct: false }
                ]
            },
            {
                question: "Which part of the brain controls voluntary movement?",
                answers: [
                    { text: "Cerebrum", correct: true },
                    { text: "Cerebellum", correct: false },
                    { text: "Brainstem", correct: false },
                    { text: "Thalamus", correct: false }
                ]
            },
            {
                question: "What is the primary function of red blood cells?",
                answers: [
                    { text: "Transport oxygen", correct: true },
                    { text: "Fight infections", correct: false },
                    { text: "Produce hormones", correct: false },
                    { text: "Digest food", correct: false }
                ]
            }
        ]
    },
    History: {
        1: [
            {
                question: "Who was the first president of the United States?",
                answers: [
                    { text: "George Washington", correct: true },
                    { text: "Thomas Jefferson", correct: false },
                    { text: "Abraham Lincoln", correct: false },
                    { text: "John Adams", correct: false }
                ]
            },
            {
                question: "What year did World War II end?",
                answers: [
                    { text: "1945", correct: true },
                    { text: "1939", correct: false },
                    { text: "1918", correct: false },
                    { text: "1950", correct: false }
                ]
            },
            {
                question: "Who wrote the Declaration of Independence?",
                answers: [
                    { text: "Thomas Jefferson", correct: true },
                    { text: "Benjamin Franklin", correct: false },
                    { text: "John Adams", correct: false },
                    { text: "Alexander Hamilton", correct: false }
                ]
            }
        ],
        2: [
            {
                question: "Which empire built the Colosseum?",
                answers: [
                    { text: "Roman Empire", correct: true },
                    { text: "Greek Empire", correct: false },
                    { text: "Ottoman Empire", correct: false },
                    { text: "Persian Empire", correct: false }
                ]
            },
            {
                question: "In which year did the French Revolution begin?",
                answers: [
                    { text: "1789", correct: true },
                    { text: "1776", correct: false },
                    { text: "1804", correct: false },
                    { text: "1799", correct: false }
                ]
            },
            {
                question: "Who was the first emperor of China?",
                answers: [
                    { text: "Qin Shi Huang", correct: true },
                    { text: "Liu Bang", correct: false },
                    { text: "Kublai Khan", correct: false },
                    { text: "Sun Yat-sen", correct: false }
                ]
            }
        ]
    },

    Geography: {
        
        1: [
            {
                question: "Who was the first president of the United States?",
                answers: [
                    { text: "George Washington", correct: true },
                    { text: "Thomas Jefferson", correct: false },
                    { text: "Abraham Lincoln", correct: false },
                    { text: "John Adams", correct: false }
                ]
            },
            {
                question: "What year did World War II end?",
                answers: [
                    { text: "1945", correct: true },
                    { text: "1939", correct: false },
                    { text: "1918", correct: false },
                    { text: "1950", correct: false }
                ]
            },
            {
                question: "Who wrote the Declaration of Independence?",
                answers: [
                    { text: "Thomas Jefferson", correct: true },
                    { text: "Benjamin Franklin", correct: false },
                    { text: "John Adams", correct: false },
                    { text: "Alexander Hamilton", correct: false }
                ]
            }
        ],
        2: [
            {
                question: "Which empire built the Colosseum?",
                answers: [
                    { text: "Roman Empire", correct: true },
                    { text: "Greek Empire", correct: false },
                    { text: "Ottoman Empire", correct: false },
                    { text: "Persian Empire", correct: false }
                ]
            },
            {
                question: "In which year did the French Revolution begin?",
                answers: [
                    { text: "1789", correct: true },
                    { text: "1776", correct: false },
                    { text: "1804", correct: false },
                    { text: "1799", correct: false }
                ]
            },
            {
                question: "Who was the first emperor of China?",
                answers: [
                    { text: "Qin Shi Huang", correct: true },
                    { text: "Liu Bang", correct: false },
                    { text: "Kublai Khan", correct: false },
                    { text: "Sun Yat-sen", correct: false }
                ]
            }
        ]
    }

};

// DOM Elements
// DOM Elements
const subjectSection = document.getElementById('subjects');
const lessonSection = document.getElementById('lessons');
const quizSection = document.getElementById('quiz');
const finalScoreSection = document.getElementById('final-score');
const questionText = document.getElementById('question-text');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const scoreDisplay = document.getElementById('score');
const backToSubjectsBtn = document.getElementById('back-to-subjects');
const finalScoreText = document.getElementById('final-score-text');
const restartQuizBtn = document.getElementById('restart-quiz');
const lessonListContainer = document.querySelector('.lesson-list');
const selectSubjectButtons = document.querySelectorAll('.select-subject-btn');
const quizTitle = document.getElementById('quiz-title');
const nextButton = document.getElementById('next-button'); // Add Next button element

// Quiz Variables
let selectedSubject = '';
let selectedLesson = '';
let questions = [];
let currentQuestionIndex = 0;
let score = 0;


// Event Listeners for Subject Selection
selectSubjectButtons.forEach(button => {
    button.addEventListener('click', () => {
        selectedSubject = button.parentElement.getAttribute('data-subject');
        populateLessons(selectedSubject);
        subjectSection.classList.add('hidden');
        lessonSection.classList.remove('hidden');
    });
});

// Function to Populate Lessons Based on Selected Subject
function populateLessons(subject) {
    lessonListContainer.innerHTML = ''; // Clear previous lessons
    const lessons = Object.keys(data[subject]);
    lessons.forEach(lesson => {
        const lessonItem = document.createElement('div');
        lessonItem.classList.add('lesson-item');
        lessonItem.innerHTML = `
            <h3>Chapter ${lesson}</h3>
            <button class="select-lesson-btn">Start Quiz</button>
        `;
        const selectLessonBtn = lessonItem.querySelector('.select-lesson-btn');
        selectLessonBtn.addEventListener('click', () => {
            selectedLesson = lesson;
            startQuiz(subject, lesson);
        });
        lessonListContainer.appendChild(lessonItem);
    });
}

// Back to Subjects Button
backToSubjectsBtn.addEventListener('click', () => {
    lessonSection.classList.add('hidden');
    subjectSection.classList.remove('hidden');
});

// Function to Start Quiz
function startQuiz(subject, lesson) {
    questions = data[subject][lesson];
    currentQuestionIndex = 0;
    score = 0;
    quizTitle.textContent = `Quiz: ${subject} - ${lesson}`;
    lessonSection.classList.add('hidden');
    quizSection.classList.remove('hidden');
    updateScore();
    setNextQuestion();
}

// Function to Set Next Question
function setNextQuestion() {
    resetState();
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        nextButton.classList.add('hidden'); // Hide Next button initially
    } else {
        showFinalScore();
    }
}

// Function to Show Question
function showQuestion(question) {
    questionText.textContent = question.question;
    btn1.textContent = question.answers[0].text;
    btn2.textContent = question.answers[1].text;
    btn3.textContent = question.answers[2].text;
    btn4.textContent = question.answers[3].text;

    btn1.onclick = () => selectAnswer(btn1, question.answers[0]);
    btn2.onclick = () => selectAnswer(btn2, question.answers[1]);
    btn3.onclick = () => selectAnswer(btn3, question.answers[2]);
    btn4.onclick = () => selectAnswer(btn4, question.answers[3]);
}

// Function to Handle Answer Selection
function selectAnswer(button, answer) {
    disableButtons();
    if (answer.correct) {
        score++;
        button.classList.add('correct');
    } else {
        button.classList.add('wrong');
    }
    updateScore();

    // Show correct answer if wrong was selected
    if (!answer.correct) {
        const correctButton = getCorrectButton();
        if (correctButton) {
            correctButton.classList.add('correct');
        }
    }

    // Show the Next Question button
    nextButton.classList.remove('hidden');
}

// Next Question Button Event Listener
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
    nextButton.classList.add('hidden'); // Hide Next Question button again
});

// Function to Get Correct Button
function getCorrectButton() {
    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswer = currentQuestion.answers.find(ans => ans.correct);
    switch (correctAnswer.text) {
        case btn1.textContent:
            return btn1;
        case btn2.textContent:
            return btn2;
        case btn3.textContent:
            return btn3;
        case btn4.textContent:
            return btn4;
        default:
            return null;
    }
}

// Function to Disable All Buttons
function disableButtons() {
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
}

// Function to Reset Button States
function resetState() {
    enableButtons();
    clearButtonClasses();
}

// Function to Enable All Buttons
function enableButtons() {
    btn1.disabled = false;
    btn2.disabled = false;
    btn3.disabled = false;
    btn4.disabled = false;
}

// Function to Clear Button Classes
function clearButtonClasses() {
    btn1.classList.remove('correct', 'wrong');
    btn2.classList.remove('correct', 'wrong');
    btn3.classList.remove('correct', 'wrong');
    btn4.classList.remove('correct', 'wrong');
}

// Function to Update Score Display
function updateScore() {
    scoreDisplay.textContent = `Score: ${score}`;
}

// Function to Show Final Score
function showFinalScore() {
    quizSection.classList.add('hidden');
    finalScoreSection.classList.remove('hidden');
    finalScoreText.textContent = `Your final score is: ${score} out of ${questions.length}`;
}

// Restart Quiz Button
restartQuizBtn.addEventListener('click', () => {
    finalScoreSection.classList.add('hidden');
    subjectSection.classList.remove('hidden');
});


