<?php
require 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];

    $stmt = $pdo->prepare("INSERT IGNORE INTO newsletters (email) VALUES (?)");
    $stmt->execute([$email]);

    echo "Merci pour votre abonnement !";
}
?>
