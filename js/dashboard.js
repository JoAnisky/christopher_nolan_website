const tBody = document.querySelector('tbody');

function mailList(){
    // Lancement de la requête AJAX vers le script mail-list.php
    const ajaxRequest = new XMLHttpRequest();
    ajaxRequest.open('GET', 'mail-list.php', false);
    ajaxRequest.setRequestHeader("Content-Type", "text/html; charset=utf-8");

    ajaxRequest.onreadystatechange = function () {
        if (ajaxRequest.readyState == 4) {
            if (ajaxRequest.status == 200) {
                var data = ajaxRequest.responseText;
                tBody.innerHTML= data;
            }
        }
    };
    ajaxRequest.send();
}

mailList();