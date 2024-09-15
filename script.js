const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Dark mode toggle functionality
// Apply saved theme
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    darkModeToggle.checked = true;
}

// Toggle dark mode
darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
});



document.querySelectorAll('.subject-toggle').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();

        // Close all other subject-items
        document.querySelectorAll('.subject-item').forEach(otherItem => {
            if (otherItem !== this.parentElement) {
                otherItem.classList.remove('active');
            }
        });

        // Toggle the clicked one
        const parent = this.parentElement;
        parent.classList.toggle('active'); // Toggle active class to show/hide options
    });
});

