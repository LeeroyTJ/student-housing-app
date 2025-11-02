// Simple script for button interactions
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
            
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Add a simple animation effect
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
                    
            // For demo purposes, show an alert
            if(this.classList.contains('btn-primary') || this.classList.contains('btn-outline')) {
                if(this.textContent === 'Sign Up' || this.textContent === 'Log In') {
                    alert('Authentication feature would open here');
                } else if(this.textContent === 'Search') {
                    alert('Search functionality would execute here');
                } else if(this.textContent === 'Browse Properties') {
                    alert('Redirecting to properties page');
                } else if(this.textContent === 'List Your Property') {
                    alert('Redirecting to property listing page');
                }
            }
        });
    });
});