document.addEventListener('DOMContentLoaded', function() {
    const chapterLinks = document.querySelectorAll('.chapter-menu a');

    chapterLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // MCQ Feedback System
    document.querySelectorAll('.mcq-options button').forEach(button => {
        button.addEventListener('click', function() {
            const question = this.closest('.mcq-question');
            const feedback = question.querySelector('.feedback');
            const showAnswer = question.querySelector('.show-answer');
            const answer = question.querySelector('.answer');
            
            // Check if the answer is correct or wrong
            const isCorrect = this.getAttribute('data-answer') === 'correct';
            
            
            feedback.textContent = '';
            feedback.classList.remove('feedback-correct', 'feedback-wrong');
            
            // Update the selected button state
            if (isCorrect) {
                this.classList.add('correct');
                feedback.textContent = 'Correct!';
                feedback.classList.add('feedback-correct');

                 // Disable other buttons
            question.querySelectorAll('.mcq-options button').forEach(btn => {
                if (btn !== this) btn.disabled = true;
            });
            } else {
                this.classList.add('wrong');
                feedback.textContent = 'Wrong!';
                feedback.classList.add('feedback-wrong');
            }
            
           
            
            // Show the answer
            showAnswer.style.display = 'block';
        });
    });

    document.querySelectorAll('.show-answer').forEach(button => {
        button.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
        });
    });
});
