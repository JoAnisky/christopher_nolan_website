const mailView = document.getElementById('mail-count');
const totalMailNbr = document.getElementById('total-mail');
const divMore = document.getElementById('div-more');
// Affichage liste des adresses mails de la BDD (mail-list.php)
function mailList(a,b){
  fetch(a, {
    method: "POST",
    body: b,
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error status: ${response.status}`);
      }

      let mailCount = response.headers.get('nbr');
      let mailTotal = response.headers.get('nbrTotal');
      let errorMsg = response.headers.get('error');
      mailView.textContent = mailCount;
      totalMailNbr.textContent = mailTotal;
      removeShowMore(mailCount,mailTotal);

      return response.json();
    })
    .then(data => {
      // On récupere la balise tbody contenue dans le HTML
      const tBody = document.querySelector('tbody')
      // Parcourt la longueur du fichier JSON
      for (i = 0; i < data.length; i ++){
          // On récupere la balise template contenue dans le HTML
          let template = document.querySelector('#productrow');

          // Crée un clone du contenu (TD) à partir du template
          let clone = document.importNode(template.content, true);
          let td = clone.querySelectorAll("td");
          // Injection adresse mail dans TD
          td[0].textContent = `${data[i].email}`;
          td[0].setAttribute('data-value', `${data[i].email}`);

          // Injection date inscription dans TD
          td[1].textContent = `${data[i].date_inscription}`;
          td[1].setAttribute('data-value', `${data[i].date_inscription}`);

          td[2].setAttribute('data-value', `${data[i].id}`);
          td[2].setAttribute('data-mail', `${data[i].email}`);
          tBody.appendChild(clone);

          // Bouton delete :: Création fenêtre confirmation au click
            td[2].addEventListener('click', (e)=> {
                // Récupère le mail de l'user à suppr
               let mailToSupp = e.currentTarget.dataset.mail;
                // Récupère l'ID de l'user à suppr
               let mailDeleteId = e.currentTarget.dataset.value;
               // Récupère
               let rowToSupp = td[2].parentElement;
                // Création de la fenêtre de confirmation de suppression
                // DIV container
                const divConfirmationContainer = document.createElement('DIV');
                divConfirmationContainer.setAttribute('id', "delete-confirmation-container");
                // DIV box choix
                const divConfirmation = document.createElement('DIV');
                divConfirmation.setAttribute('id', 'delete-confirmation');
                // Texte de confirmation
                const textConfirmation = document.createElement('P');
                textConfirmation.innerText = `Etes-vous sûr de vouloir supprimer cet utilisateur ? `;

                // Mail à supprimer
                const mailConfirmation = document.createElement('SPAN');
                mailConfirmation.innerText= `${mailToSupp}`;
                mailConfirmation.style.fontWeight = 'bold';

                // Bouton Yes
                const btnYes = document.createElement('BUTTON');
                btnYes.setAttribute('id','btn-yes');
                btnYes.textContent = "SUPPRIMER";
                // Bouton No
                const btnNo = document.createElement('BUTTON');
                btnNo.setAttribute('id','btn-no');
                btnNo.textContent = "RETOUR";

                divConfirmationContainer.append(divConfirmation);
                divConfirmation.appendChild(textConfirmation);
                textConfirmation.appendChild(mailConfirmation);
                divConfirmation.appendChild(btnYes);
                divConfirmation.appendChild(btnNo);
                document.body.appendChild(divConfirmationContainer);
                let delStatus = document.getElementById('del-status');
                // Delete fetch on click "Yes"
                btnYes.addEventListener('click', () => {
                  toast();
                  // Supprime la ligne corespondante
                  rowToSupp.remove();
                  const postMethod = {
                    method: 'POST'
                    // Data JSON format
                  }
                  fetch(`delete-user.php?mailToSuppID=${mailDeleteId}`, postMethod)
                  .then(response => {
                    if (!response.ok) {
                      throw new Error(`Error status: ${response.status}`);
                    }
                    return response.json();
                  })
                  .then(response=> {
                    if(response == true){
                      delStatus.innerText = "Utilisateur supprimé";
                      mailView.textContent --;
                      totalMailNbr.textContent --;
                    }else{
                      delStatus.innerText = "Un problème est survenu";
                    }
                  });
                  divConfirmationContainer.remove();
                });
                // Click sur No
                btnNo.addEventListener('click', () => {
                  divConfirmationContainer.remove();
                });
            });
          // Fin bouton Delete
      }
    // Fin boucle affichage liste adresse mails
    });
};

// Chargement de la liste au DOM Load
window.addEventListener('DOMContentLoaded', () => {
  const load = new FormData;
  load.append("value", 0);
  mailList(`mail-list.php`, load);
});
// ScrollUp
const scrollUp = document.querySelector('.scrollUp');
window.addEventListener("scroll", () => {
  if(window.scrollY > 300){
      scrollUp.style.display = "block";
      scrollUp.classList.add("visible");
  }else if (window.scrollY < 300){
      scrollUp.style.display = "none";
  }
});

function removeShowMore(a, b){
  if(a == b){
    divMore.remove();
  }
};

function toast(){
  const snackbar = document.getElementById("snackbar");
  snackbar.className = "show";
  setTimeout(
    function(){
      snackbar.className = snackbar.className.replace("show", ""); 
    }, 
  3000);
};

// Fetch bouton "VOIR PLUS" adresses mails
let nbrShowMore = 0;
const showMoreBtn = document.getElementById('btn-show-more');
showMoreBtn.addEventListener('click',()=>{
  const showMore = new FormData;
  nbrShowMore = nbrShowMore + 10;
  showMore.append("value", nbrShowMore);
  mailList(`mail-list.php`, showMore);
});

// Modulo pour le tri croissant/décroissant
function isEven(m){
  return m % 2 === 0;
};

// Tri de l'affichage des adresses mails
const orderMail = document.getElementById('order-mail');
let moduloMail = 0;

// Click pour ordonner les mails
orderMail.addEventListener('click',()=>{
  moduloMail ++;
  if (!isEven(moduloMail)){
    orderMail.style.transform = "rotate(0)";
    triAlphaAsc(0);
  }else{
    triAlphaDesc(0);
    orderMail.style.transform = "rotate(180deg)";
  }
});

// Click pour ordonner les dates
const orderDate = document.getElementById('order-date');
let moduloDate = 0;
orderDate.addEventListener('click',()=>{
  moduloDate ++;
  if (!isEven(moduloDate)){
    orderDate.style.transform = "rotate(0)";
    triAlphaAsc(1);
  }else{
    orderDate.style.transform = "rotate(180deg)";
    triAlphaDesc(1);
  }
});

// Tri à bulles CROISSANT de la liste d'adresse mails
function triAlphaAsc(a){
  // Récupère tous les TR contenus dans tbody
  let trRows = document.querySelectorAll(".rows");
  // On récupere la balise tbody contenue dans le HTML
  const tBody = document.querySelector('tbody');
  for (let i = 0; i < trRows.length; i ++){ 
  let email = trRows[i].querySelector(`.td${a}`).dataset.value;
    for (let k = i + 1; k<trRows.length; k++){
    let emailK = trRows[k].querySelector(`.td${a}`).dataset.value;
      if (email > emailK){
        tBody.insertBefore(trRows[k],trRows[i]);
        trRows = document.querySelectorAll(".rows");
        email = trRows[i].querySelector(`.td${a}`).dataset.value;
      }
    }
  }
};

// Tri à bulles DECROISSANT de la liste d'adresse mails
function triAlphaDesc(a){
  // Récupère tous les TR contenus dans tbody
  let trRows = document.querySelectorAll(".rows");
  // On récupere la balise tbody contenue dans le HTML
  const tBody = document.querySelector('tbody');
  for (let i = 0; i < trRows.length; i ++){ 
  let email = trRows[i].querySelector(`.td${a}`).dataset.value;
    for (let k = i + 1; k<trRows.length; k++){
    let emailK = trRows[k].querySelector(`.td${a}`).dataset.value;
      if (email < emailK){
        tBody.insertBefore(trRows[k],trRows[i]);
        trRows = document.querySelectorAll(".rows");
        email = trRows[i].querySelector(`.td${a}`).dataset.value;
      }
    }
  }
};

// Fonction de recherche
const formSearch = document.getElementById('search-form');
const inputSearch = document.getElementById('search');

formSearch.addEventListener('submit', function(e){
  if(inputSearch.value != ""){
    e.preventDefault();
    const test = new FormData();
    test.append("value", 0);
    mailSearch();
  }
});
// formSearch.addEventListener('submit', function(e){
//   e.preventDefault();

//     const test = new FormData();
//     test.append("value", 0);
//     mailSearch();  

// });
function mailSearch(){
  let trRows = document.querySelectorAll(".rows");
  trRows.forEach(row => {
    row.remove();
  });
  const search = new FormData(formSearch);
  mailList('search.php', search);
}