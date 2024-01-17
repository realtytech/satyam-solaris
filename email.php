<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Include PHPMailer autoload.php if you haven't already

require './phpmailer/Exception.php';
require './phpmailer/PHPMailer.php';
require './phpmailer/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = 'devconcept@gmail.com';
    $fname = $_POST["fname"];
    $mobile = $_POST["mobile"];
    $email = $_POST["email"];
    //$message = $_POST["message"];
    $data = "Name: " . $fname . "\nEmail: " . $email . "\nMobile: " . $mobile;

    try {
        $mail = new PHPMailer();
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; // Gmail SMTP server
        $mail->SMTPAuth = true;
        $mail->Username = 'info.martinclub8282@gmail.com'; // Your Gmail email address
        $mail->Password = 'svjuuzvvgjojbvuy'; // Your Gmail password or app-specific password
        $mail->SMTPSecure = 'tls'; // Enable TLS encryption
        $mail->Port = 587; // TCP port to connect to

        $mail->setFrom('info.martinclub8282@gmail.com', 'Demo');
        $mail->addAddress($to);

        $mail->isHTML(false);
        $mail->Subject = "This email from Contact form";
        $mail->Body = $data;

        $mail->send();
        // echo 'Email sent successfully!';
        header("Location: ./response.php");
    } catch (Exception $e) {
        echo 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo;
    }
}
?>
