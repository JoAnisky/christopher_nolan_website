<?php 
// Creer une session de connexion
session_start();

// Charger le fichier autoload.php (pour gérer le fichier .env)
require __DIR__ .'/vendor/autoload.php';
// Spécifie d'aller chercher le fichier .env (_DIR_, nomfichier(si il possède un nom))
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
// Charger la méthode dotenv
$dotenv->load();

// Récupère les variables contenues dans le fichier .env
$DB_HOST= $_ENV['DB_HOST'];
$DB_USER= $_ENV['DB_USER'];
$DB_PASS= $_ENV['DB_PASS'];
$DB_NAME= $_ENV['DB_NAME'];

// if(isset($_POST['envoi'])){

    if(!empty($_POST['login']) && !empty($_POST['password'])){
        try{
            // Initialise un objet PDO avec les données de connexions transmises depuis le fichier .env
            $bdd = new PDO('mysql:dbname='.$DB_NAME.';host='.$DB_HOST, $DB_USER, $DB_PASS);

            // Définit les paramètres d'exceptions
            $bdd->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

            // On empeche l'insertion de HTML
            $pseudo = htmlspecialchars($_POST['login']);

            // On crypte le mot de passe selon la meme méthode que dans le BDD
            $mdp = ($_POST['password']);

            $recupUser = $bdd->prepare('SELECT * FROM users WHERE login = :pseudo AND password = :mdp');
            $recupUser->bindParam(':pseudo', $pseudo,PDO::PARAM_STR);
            $recupUser->bindParam(':mdp', $mdp,PDO::PARAM_STR);
            var_dump($recupUser);
            // On fait correspondre le pseudo entré et le MDP entré
            $recupUser->execute();
           
            // COMPARER

            // On dit a PHP que si on a récupéré au moins un des élément on peut se connecter
            if($recupUser->rowCount() > 0){
                $_SESSION['pseudo'] = $pseudo;
                $_SESSION['mdp'] = $mdp;
                $_SESSION['id'] = $recupUser->fetch()['id'];
                header('Location: dashboard.php');
                echo 'vous etes connecté mais ça ne marche pas';
            }else{
                echo "Pseudo ou mot de passe incorrect";
            }
        
        }catch(PDOExeption $e){
            echo $e->getMessage();
        }

    }else{
        echo "Vous devez compléter les champs";
    }