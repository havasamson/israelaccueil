<?php

/*
  contact form
 */
require_once 'PHPMailer/PHPMailerAutoload.php';
header('Content-Type: application/json');
$mail = new PHPMailer();

$email = $_POST['email'];
$name = $_POST['name'];
$mess = $_POST['message'];

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'chi-node8.websitehostserver.net';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'alex@reikiexchange.com';                 // SMTP username
$mail->Password = 'change2world';                           // SMTP password
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;
//
//$mail->setFrom('mutasim@droitlab.com', 'Droitlab');
$mail->setFrom($email, $name);
$mail->addAddress('Ava.smsv@gmail.com', 'IsraelAccueil');     // Add a recipient
$mail->addAddress('muhammadaqibrasheed@gmail.com', 'Aqib');     // Add a recipient
$mail->addReplyTo($email, $name);
$mail->isHTML(true);

$mail->Subject = 'Contact From Smith';

$message = "<h2>New Contact Form Submission Received</h2>".
    "<table border='1'>".
    "<tr><td><b>Name</b></td><td>$name</td></tr>".
    "<tr><td><b>Email</b></td><td>$email</td></tr>".
    "<tr><td><b>Message</b></td><td>$mess</td></tr>".
    "</table>";

$message.='</table>';

$mail->Body = $message;
// $to = "Israelaccueil@gmail.com, Ava.smsv@gmail.com";
// $subject = "New $type Submission Received";
// // Always set content-type when sending HTML email
// $headers = "MIME-Version: 1.0" . "\r\n";
// $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
// // More headers
// $headers .= "From: <$email>" . "\r\n";
// if(mail($to,$subject,$message,$headers)){
//     echo 'Message Envoyé!';
// }else{
//     echo 'Email non valide.';
// };


if(!$mail->send()) {
  /*echo 'Message could not be sent.';
  echo 'Mailer Error: ' . $mail->ErrorInfo;*/
  //$result = array('message_status' => 'no', 'content' => $mail->ErrorInfo);
  $result = array('message_status' => 'no', 'content' => 'Email non valide.');
  echo 'Email non valide.';
} else {
  $result = array('message_status' => 'ok', 'content' => 'Message Envoyé!');
  echo 'Message Envoyé!';;
}
