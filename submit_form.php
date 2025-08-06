<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // For demonstration purposes, send an email (you would need to set up an SMTP server)
    $to = "youremail@example.com"; // Replace with your email
    $subject = "New Message from $name";
    $body = "You have received a new message from $name ($email):\n\n$message";
    
    // Send the email
    if (mail($to, $subject, $body)) {
        echo "Message sent successfully!";
    } else {
        echo "There was a problem sending your message.";
    }
}
?>
