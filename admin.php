<?php 
// Charger les informations de connexion à la DB
require('dbconnect.php');

if(isset($_POST['login']) && isset($_POST['password']) && !empty($_POST['login']) && !empty($_POST['password'])){
    try{
        // Initialise un objet PDO avec les données de connexions transmises depuis le fichier .env
        $bdd = new PDO('mysql:dbname='.$DB_NAME.';host='.$DB_HOST, $DB_USER, $DB_PASS);

        // Définit les paramètres d'exceptions
        $bdd->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

        // On empeche l'insertion de HTML
        $pseudo = htmlspecialchars($_POST['login']);

        // On récupère le mot de passe 
        // On peut aussi le crypter selon la meme méthode que dans la BDD
        $mdp = ($_POST['password']);

        // Initialise la requête SQL
        $recupUser = $bdd->prepare('SELECT * FROM users WHERE login = :pseudo AND password = :mdp');
        $recupUser->bindParam(':pseudo', $pseudo,PDO::PARAM_STR);
        $recupUser->bindParam(':mdp', $mdp,PDO::PARAM_STR);

        // Execute la requête SQL
        $recupUser->execute();
        // COMPARER
        // On dit a PHP que si on a récupéré au moins un des élément on peut se connecter
        if($recupUser->rowCount() == 1){
            // Creer une session de connexion
            session_start();
            $_SESSION['id'] = $recupUser->fetch()['id'];
            // Test si ok

            // Initialise le tableau qui contient la réponse à afficher en JS et le booleen connexion OK ou non
            $response = array("reponse"=>"",$bool=true);

            // Encode la réponse au format JSON pour être reçu par JS
            echo json_encode($response);
        }else{
            $response = array("reponse"=>"Pseudo ou mot de passe incorrect", $bool=false);
            echo json_encode($response);
        }
    }catch(PDOExeption $e){
        echo $e->getMessage();
    }
}else{
    $response = array("reponse"=>"vous devez remplir les deux champs", $bool=false);
    echo json_encode($response,$bool);

    // Si les deux champs sont vides -> redirection page login.php
    header('Location: login.php');
}