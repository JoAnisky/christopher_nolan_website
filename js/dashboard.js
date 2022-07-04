
// function mailList(){
//     // Lancement de la requête AJAX vers le script mail-list.php
//     const ajaxRequest = new XMLHttpRequest();
//     ajaxRequest.open('GET', 'mail-list.php', false);
//     ajaxRequest.setRequestHeader("Content-Type", "text/html; charset=utf-8");

//     ajaxRequest.onreadystatechange = function () {
//         if (ajaxRequest.readyState == 4) {
//             if (ajaxRequest.status == 200) {
//                 var data = ajaxRequest.responseText;
//                 tBody.innerHTML= data;
//             }
//         }
//     };
//     ajaxRequest.send();
// }
const template = document.querySelector('#productrow');
const tBody = document.querySelector('tbody');

let clone = document.importNode(template.content, true);
let td = clone.querySelectorAll("td");

function mailList(){

    fetch('mail-list.php', {
        method: "POST"
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error status: ${response.status}`);
      }

      return response.json();
    })
    .then(result => {
      console.log('ta mere');
    })
    .catch(err => {console.log(err)});
};

tBody.append(clone);
mailList();