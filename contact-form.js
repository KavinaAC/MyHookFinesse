document.addEventListener('DOMContentLoaded', function() {
    // Select the form and the success message element
    const form = document.querySelector('.contact-form');
    const successMessage = document.getElementById('successMessage');
    
    // Add event listener for form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from refreshing the page
        
        // Show success message
        successMessage.style.display = 'block';
        
        // Scroll to the success message
        successMessage.scrollIntoView({ behavior: 'smooth' });

        // Optionally clear the form fields after submission
        form.reset();
        
        // Hide success message after 3 seconds
        setTimeout(function() {
            successMessage.style.display = 'none'; // Hide success message after 3 seconds
        }, 3000);  // 3000 milliseconds = 3 seconds
    });
});
