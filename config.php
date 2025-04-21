<?php
$host = 'localhost';
$dbname = 'haute_couture';
$user = 'root'; // غيّر إذا عندك مستخدم آخر
$pass = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Erreur de connexion: " . $e->getMessage());
}
?>
