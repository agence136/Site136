<?php
require 'PHPMailer/PHPMailerAutoload.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $msg_subject = $_POST["msg_subject"];
    $phone = $_POST["phone_number"];
    $message = $_POST["message"];

    $mail = new PHPMailer;

    $mail->isSMTP();
    $mail->Host = 'smtp-relay.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'your_username';
    $mail->Password = 'your_password';
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    $mail->setFrom($email, $name);
    $mail->addAddress('contact@agence136.fr', 'Recipient Name');

    $mail->Subject = $msg_subject;
    $mail->Body = $message;

    if ($mail->send()) {
        http_response_code(200); // Réponse HTTP 200 OK
    } else {
        http_response_code(500); // Réponse HTTP 500 Erreur interne du serveur
    }
} else {
    http_response_code(400); // Réponse HTTP 400 Mauvaise requête
}