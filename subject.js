document.addEventListener('DOMContentLoaded', function () {

    // Function to shuffle the options randomly
    function shuffleOptions(options) {
        for (let i = options.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [options[i], options[j]] = [options[j], options[i]];
        }
        return options;
    }

    // Save the user's answer to localStorage
    function saveAnswer(questionId, selectedAnswer, isCorrect, isFirstAttemptWrong) {
        let answers = JSON.parse(localStorage.getItem('userAnswers')) || {};
        answers[questionId] = { answer: selectedAnswer, isCorrect: isCorrect, isFirstAttemptWrong: isFirstAttemptWrong };
        localStorage.setItem('userAnswers', JSON.stringify(answers));
        calculateScore();
    }

    // Get the user's saved answer from localStorage
    function getSavedAnswer(questionId) {
        let answers = JSON.parse(localStorage.getItem('userAnswers')) || {};
        return answers[questionId];
    }

    // Calculate and display the user's score
    function calculateScore() {
        let answers = JSON.parse(localStorage.getItem('userAnswers')) || {};
        let correctCount = 0;
        let wrongCount = 0;

        for (let questionId in answers) {
            if (answers[questionId].isCorrect && !answers[questionId].isFirstAttemptWrong) {
                correctCount++;
            } else {
                wrongCount++;
            }
        }

        document.querySelector('.score').textContent = `Correct: ${correctCount}, Wrong: ${wrongCount}`;
    }

    // Function to clear the scores and reset localStorage
    function clearScores() {
        localStorage.removeItem('userAnswers');  // Remove saved answers
        document.querySelector('.score').textContent = `Correct: 0, Wrong: 0`;  // Reset score display

        // Enable all buttons and remove correct/wrong classes
        document.querySelectorAll('.mcq-options button').forEach(button => {
            button.disabled = false;
            button.classList.remove('correct', 'wrong');
        });

        // Clear feedback and hide answer sections
        document.querySelectorAll('.feedback').forEach(feedback => {
            feedback.textContent = '';
            feedback.classList.remove('feedback-correct', 'feedback-wrong');
        });

        document.querySelectorAll('.show-answer').forEach(button => {
            const answer = button.nextElementSibling;
            answer.style.display = 'none';  // Hide answers again
        });
    }

    // MCQ Feedback System
    document.querySelectorAll('.mcq-question').forEach((question, index) => {
        const optionsContainer = question.querySelector('.mcq-options');
        const options = Array.from(optionsContainer.children);
        const questionId = `question_${index + 1}`;  // Create a unique ID for each question

        // Shuffle the options
        const shuffledOptions = shuffleOptions(options);

        // Remove existing options and append shuffled options
        optionsContainer.innerHTML = '';
        shuffledOptions.forEach(option => optionsContainer.appendChild(option));

        // Check if the user already answered this question
        const savedAnswer = getSavedAnswer(questionId);
        if (savedAnswer) {
            question.querySelectorAll('.mcq-options button').forEach(button => {
                if (button.textContent.trim() === savedAnswer.answer) {
                    // Simulate a click on the saved answer
                    button.click();
                }
            });
        }

        let isFirstAttemptWrong = false;  // Track if the first attempt was wrong

        // Add event listener for button clicks
        shuffledOptions.forEach(button => {
            button.addEventListener('click', function () {
                const feedback = question.querySelector('.feedback');
                const showAnswer = question.querySelector('.show-answer');

                // Check if the answer is correct or wrong
                const isCorrect = this.getAttribute('data-answer') === 'correct';

                feedback.textContent = '';
                feedback.classList.remove('feedback-correct', 'feedback-wrong');

                // Update the button state and feedback
                if (isCorrect) {
                    this.classList.add('correct');
                    feedback.textContent = 'Correct!';
                    feedback.classList.add('feedback-correct');

                    // Save the answer (mark correct but keep first attempt wrong if applicable)
                    saveAnswer(questionId, this.textContent.trim(), true, isFirstAttemptWrong);

                    // Disable other buttons after the correct answer is selected
                    question.querySelectorAll('.mcq-options button').forEach(btn => {
                        if (btn !== this) btn.disabled = true;
                    });
                } else {
                    this.classList.add('wrong');
                    feedback.textContent = 'Wrong!';
                    feedback.classList.add('feedback-wrong');

                    // Mark first attempt wrong if it's the first incorrect answer
                    if (!isFirstAttemptWrong) {
                        isFirstAttemptWrong = true;
                    }

                    // Save the wrong answer attempt
                    saveAnswer(questionId, this.textContent.trim(), false, isFirstAttemptWrong);
                }

                // Show the answer
                showAnswer.style.display = 'block';
            });
        });
    });

    document.querySelectorAll('.show-answer').forEach(button => {
        button.addEventListener('click', function () {
            const answer = this.nextElementSibling;
            answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
        });
    });

    // Add event listener to the "Clear Scores" button
    document.querySelector('.clear-scores').addEventListener('click', function () {
        clearScores();
    });

    // Calculate and display the score on page load
    calculateScore();
});
