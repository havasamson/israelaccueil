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
$mail->Host = 'p3plcpnl0361.prod.phx3.secureserver.net';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'mutasim@droitlab.com';                 // SMTP username
$mail->Password = 'Muta45**sim?';                           // SMTP password
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;

//$mail->setFrom('mutasim@droitlab.com', 'Droitlab');
$mail->setFrom($email, $name);
$mail->addAddress('israelacceuil@gmail.com', 'IsraelAccueil');     // Add a recipient
$mail->addReplyTo($email, $name);
$mail->isHTML(true);

$mail->Subject = 'Contact From Smith';
$mail->Body    = '<strong>Name : </strong>' . $name . '<br/><br/>';
$mail->Body  .= $mess . '<br/>';


if(!$mail->send()) {
  /*echo 'Message could not be sent.';
  echo 'Mailer Error: ' . $mail->ErrorInfo;*/
  //$result = array('message_status' => 'no', 'content' => $mail->ErrorInfo);
  $result = array('message_status' => 'no', 'content' => 'Email non valide.');
  echo json_encode($result);
} else {
  $result = array('message_status' => 'ok', 'content' => 'Message Envoyé!');
  echo json_encode($result);
}
