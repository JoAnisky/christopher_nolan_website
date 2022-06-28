<!DOCTYPE html>
<html lang="fr">
    <head>
        <title>Christopher Nolan - Login</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="description" content="Website Fanpage de Christopher Nolan crée dans le cadre de la formation ACCESS CODE SCHOOL Developpeur web/web mobile">
        <meta name="keywords" content="conception web, creation web, creation site internet, erol conception">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,700;1,400&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="css/adm.css" />
        <script src="js/login.js" defer></script>
    </head>
<body>
<div class="a_container">
    <div class="a_contain">
        <p class="log">Login</p>
        <p class="access">Accèder à l'administration</p>

        <form method="post" id="form-connect" novalidate>
            <label id="error-login" for="login"></label>
            <input type="text" name="login" id="login" placeholder="Nom d'utilisateur" required>

            <input type="password" name="password" id="password"  placeholder="••••••••••••••••••" required>
            <input type="submit" name="envoi" id="btn-submit" value="Sign in">
        </form>

    </div>
</div>
</body>
</html>