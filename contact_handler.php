<?php
require 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = $_POST['nom'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $stmt = $pdo->prepare("INSERT INTO messages_contact (nom, email, message) VALUES (?, ?, ?)");
    $stmt->execute([$nom, $email, $message]);

    echo "Merci pour votre message !";
}
?>
