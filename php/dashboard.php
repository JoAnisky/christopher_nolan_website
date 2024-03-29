<?php
//***** SECURISER L'ACCES A LA PAGE *****//
// Toujours démarrer la session en premier
session_start();
// Tester si la variable $_SESSION['id'] generée dans admin.php n'existe pas
if (!isset($_SESSION['id'])){
    //Si elle n'existe pas, redirection page login.php
    header('Location: login.php');
    exit();
}
// Sinon le reste de la page s'affiche 
?>
<!DOCTYPE html>
<html lang="fr">
    <head>
        <title>Christopher Nolan - Dashboard</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="description" content="Website Fanpage de Christopher Nolan crée dans le cadre de la formation ACCESS CODE SCHOOL Developpeur web/web mobile">
        <meta name="keywords" content="conception web, creation web, creation site internet, erol conception">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Radley&family=Raleway:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="../css/adm.css" />
        <link rel="icon" type="image/png" href="../img/icons/favicon.svg"/>
        <script src="../js/dashboard.js" defer></script>
    </head>
<body>
    <!-- Go UP Logo displayed main.js -->
    <div class="scrollUp">
        <a href="#top">
            <svg width="38" fill="none" viewBox="0 0 58 58">
                <circle cx="29" cy="29" r="29" fill="#454545"/>
                <path stroke="#fff" stroke-linecap="round" stroke-width="4" d="m17 37 12.82-15L42 37"/>
            </svg>
        </a>
    </div>
    <main>
        <div class="dash_top">
            <h1 class="title"><a href="../index.html">Nolan</a></h1>
            <div class="dash_top_right">
            <p>Se déconnecter</p>
                    <a href="logout.php">
                        <svg name='disconnect-btn' id="logo-disconnect">
                            <path fill="#E1090F" fill-rule="evenodd" d="M6.09 4v2.945c-2.353 1.208-3.69 3.747-3.22 6.361.524 2.923 3.13 5.021 6.188 4.995 3.059-.027 5.626-2.187 6.096-5.118.415-2.59-.922-5.087-3.244-6.271v-2.9c3.074 1.022 5.282 3.54 5.911 6.494a8.43 8.43 0 0 1 .07 3.091c-.676 4.214-4.414 7.364-8.81 7.403-4.395.038-8.194-3.045-8.947-7.246-.753-4.2 1.76-8.339 5.911-9.743.016-.005.03-.006.046-.011Z" clip-rule="evenodd"/>
                            <path fill="#E1090F" d="M9 2v8Z"/>
                            <path stroke="#E1090F" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 2v8"/>
                        </svg>
                    </a>
            </div>
        </div>
        <div class="dash_up_container">
            <p class="log">Dashboard</p>
            <p class="blue-text">Inscriptions à la newsletter</p>
        </div>

        <div class="table_contain">
            <form id="search-form" class="search-style" novalidate>
                <label for="search"></label>
                <input type="search" id="search" class="input-search" name="search">
                <button class="search-icon">
                    <svg class="search-btn" width="18" height="18" fill="none" viewBox="0 0 16 16">
                    <path fill="#FAFAFA" fill-rule="evenodd" d="m11.46 10.319 4.304 4.304a.807.807 0 0 1-1.142 1.14L10.32 11.46a6.4 6.4 0 1 1 1.14-1.141h.001Zm-5.06.88a4.8 4.8 0 1 0 0-9.599 4.8 4.8 0 0 0 0 9.6Z" clip-rule="evenodd"/>
                    </svg>
                </button>
            </form>
            <table>
                <thead>
                    <tr class="table-head">
                        <td>Inscrits
                            <div id="viewed">
                                <p> 
                                    <span id="mail-count"></span>
                                    sur
                                    <span id="total-mail"></span>
                                </p>
                            </div>       
                        </td>
                        <td colspan="2">
                            <button type="submit" id="btn-export-csv"><a href="export-csv.php">Export .CSV</a></button>
                        </td>
                    </tr> 
                    <tr>
                        <th style="width:35%">Email inscrits
                            <svg id="order-mail" class="arrow-array" width="12" height="9" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 5.196-9H.804L6 9z" fill="#E9E9E9"/>
                            </svg>
                        </th>
                        <th class="date-hidden" style="width:45%">Date d'inscription 
                            <svg id="order-date" class="arrow-array" width="12" height="9" xmlns="http://www.w3.org/2000/svg">
                                <path d="m6 9 5.196-9H.804L6 9z" fill="#E9E9E9"/>
                            </svg>
                        </th>
                        <th>Désinscrire</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
            <template id="productrow">
                <tr class="rows">
                    <td class="td0"></td>
                    <td class="td1"></td>
                    <td class="delete-rows" data-value="0"><svg class='btn-del-user' width='10' height='16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1 5v10c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V5H1zm3 9H3V7h1v7zm2 0H5V7h1v7zm2 0H7V7h1v7zm2 0H9V7h1v7zm2.25-12H9V.75A.753.753 0 0 0 8.25 0h-3.5A.753.753 0 0 0 4 .75V2H.75a.752.752 0 0 0-.75.75V4h13V2.75a.752.752 0 0 0-.75-.75zM8 2H5v-.987h3V2z' fill='#fff'/>
                    </svg>
                    </td>
                </tr>
            </template>

        </div>
    </main>    
    <div id="div-more" class="more">            
        <button id="btn-show-more">Voir plus</button>
    </div>
    <div id="snackbar"><span id="del-status"></span></div>
</body>
</html>