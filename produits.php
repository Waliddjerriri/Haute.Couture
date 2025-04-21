<?php
require 'config.php';

$stmt = $pdo->query("SELECT * FROM produits ORDER BY date_ajout DESC");
$produits = $stmt->fetchAll(PDO::FETCH_ASSOC);

foreach ($produits as $produit) {
    echo '<div class="col-4">';
    echo '<img src="' . htmlspecialchars($produit['image_url']) . '" alt="' . htmlspecialchars($produit['nom']) . '">';
    echo '<h3>' . htmlspecialchars($produit['nom']) . '</h3>';
    echo '<div class="rating">';
    
    $stars = floor($produit['rating']);
    $half = $produit['rating'] - $stars >= 0.5;
    
    for ($i = 0; $i < $stars; $i++) echo '<i class="fa fa-star"></i>';
    if ($half) echo '<i class="fa fa-star-half-o"></i>';
    for ($i = $stars + $half; $i < 5; $i++) echo '<i class="fa fa-star-o"></i>';
    
    echo '</div>';
    echo '<p>' . $produit['prix'] . ' DA</p>';
    echo '</div>';
}
?>
