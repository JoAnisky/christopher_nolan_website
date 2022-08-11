<?php
// ***** SCRIPT AFFICHAGE DE LA BDD nolan_newsletter ET LISTE DES EMAILS INSCRITS *****
require('dbconnect.php');

// Tester la requête vers la BDD
try{
    // Initialise un objet PDO avec les données de connexions transmises depuis le fichier .env (dbconnect.php)
    $bdd = new PDO("mysql:dbname=$DB_NAME;host=$DB_HOST;charset=$DB_CHAR", $DB_USER, $DB_PASS, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
        ]
    );

// Attraper l'erreur si la connexion a la BDD Echoue
}catch(Exception $e){
    echo $e->getMessage();
}

// HTTP Headers - Download en CSV
header("Content-Type: application/octet-stream");
header("Content-Transfer-Encoding: Binary");
header("Content-disposition: attachment; filename=\"nolan-newsletter-mailist.csv\"");

// GET MAIL LIST
$stmt = $bdd->prepare("SELECT * FROM `subscribes`");
$stmt->execute();

$fieldsName = [
    "ID",
    "Mail",
    "Date d'inscription",
    "\n",
];
echo implode(",",$fieldsName);

while ($row = $stmt->fetch(PDO::FETCH_NAMED)) {
    // ROW séparées par des virgules
    echo implode(",", [
        $row['id'], $row['email'], $row['date_inscription']
    ]);
    // NEXT ROW
    echo "\r\n";
}