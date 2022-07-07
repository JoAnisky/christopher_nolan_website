<?php
// Charger le fichier autoload.php (pour récupérer les variables dans le fichier .env)
require __DIR__ .'/vendor/autoload.php';

// Spécifie d'aller chercher le fichier .env
// Si il possède un nom -> (_DIR_, nomfichier)
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);

// Charger la méthode dotenv
$dotenv->load();

// Récupère les variables contenues dans le fichier .env
$DB_HOST= $_ENV['DB_HOST'];
$DB_USER= $_ENV['DB_USER'];
$DB_PASS= $_ENV['DB_PASS'];
$DB_NAME= $_ENV['DB_NAME'];