<?php
// ***** SCRIPT AFFICHAGE DE LA BDD nolan_newsletter ET LISTE DES EMAILS INSCRITS ***** //

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

// Créer la reqûete SQL
$sqlSelectMails = "SELECT email, date_inscription FROM subscribes";

// Tester la requête vers la BDD
try{

    // Initialise un objet PDO avec les données de connexions transmises depuis le fichier .env
    $bdd = new PDO('mysql:dbname='.$DB_NAME.';host='.$DB_HOST, $DB_USER, $DB_PASS);

    // Interroger la base de données
    $mailList = $bdd->prepare($sqlSelectMails);
    $mailList->execute();
    $result = $mailList->fetchAll();

    echo json_encode($result);

    if ($mailList === false){
        die("Erreur");
    }

// Attraper l'erreur si la connexion a la BDD Echoue
}catch(PDOExeption $e){
    echo $e->getMessage();
}

// Boucle dans la bdd
?>
<!-- <tr>
    <td>
        
            // Génere une cellule pour chaque élément trouvé dans la table de BDD
            echo htmlspecialchars($row['email']); 
         echo htmlspecialchars($row['date_inscription']); </td>
    <td>

    <svg class='btn-del-user' width='10' height='16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1 5v10c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V5H1zm3 9H3V7h1v7zm2 0H5V7h1v7zm2 0H7V7h1v7zm2 0H9V7h1v7zm2.25-12H9V.75A.753.753 0 0 0 8.25 0h-3.5A.753.753 0 0 0 4 .75V2H.75a.752.752 0 0 0-.75.75V4h13V2.75a.752.752 0 0 0-.75-.75zM8 2H5v-.987h3V2z' fill='#fff'/>

    </svg>

    </td>
</tr> -->