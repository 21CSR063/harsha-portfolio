<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    
    $to = "harshakrishnan1204@gmail.com";
    $headers = "From: $name <$email>";
    
    if (mail($to, $subject, $message, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Error: Message not sent.";
    }
} else {
    echo "Error: Invalid request.";
}
?>
