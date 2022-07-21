// Affichage liste des adresses mails de la BDD (mail-list.php)
function mailList(a){
  fetch(a, {
    method: "GET"
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error status: ${response.status}`);
      }
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
                textConfirmation.innerText = `Etes-vous sûr de vouloir supprimer cet utilisateur : ${mailToSupp} ?`;
                // Bouton Yes
                const btnYes = document.createElement('BUTTON');
                btnYes.setAttribute('id','btn-yes');
                btnYes.textContent = "Oui";
                // Bouton No
                const btnNo = document.createElement('BUTTON');
                btnNo.setAttribute('id','btn-no');
                btnNo.textContent = "Non";

                divConfirmationContainer.append(divConfirmation);
                divConfirmation.appendChild(textConfirmation);
                divConfirmation.appendChild(btnYes);
                divConfirmation.appendChild(btnNo);
                document.body.appendChild(divConfirmationContainer);

                // Delete fetch on click "Yes"
                btnYes.addEventListener('click', () => {
                  // Supprime la ligne corespondante
                  rowToSupp.remove();
                  const getMethod = {
                    method: 'GET'
                    // Data JSON format
                  }
                  fetch(`delete-user.php?mailToSuppID=${mailDeleteId}`, getMethod);
                  divConfirmationContainer.remove();
                });
                // Click sur No
                btnNo.addEventListener('click', ()=>{
                  divConfirmationContainer.remove();
                });

            });
          // Fin bouton Delete
      }
  // Fin boucle affichage liste adresse mails
  });
}

// Fetch bouton "VOIR PLUS" adresses mails
mailList(`mail-list.php?value=0`);
let nbrShowMore = 0;
const showMoreBtn = document.getElementById('btn-show-more');

showMoreBtn.addEventListener('click',()=>{
  nbrShowMore = nbrShowMore + 10;
  mailList(`mail-list.php?value=${nbrShowMore}`);
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
    triAlphaAsc(0);
  }else{
    triAlphaDesc(0);
  }
});

// Click pour ordonner les dates
const orderDate = document.getElementById('order-date');
let moduloDate = 0;
orderDate.addEventListener('click',()=>{
  moduloDate ++;
  if (!isEven(moduloDate)){
    triAlphaAsc(1);
  }else{
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

const formSearch = document.getElementById('search-form');
formSearch.addEventListener('submit', function(e){
  e.preventDefault();
  search();
})

function search(){
  const formDataSearch = new FormData(formSearch);
  // Lancement de la requête AJAX si tout est OK coté JS
  fetch('search.php', {
      method: "POST",
      body : formDataSearch
  })
  .then((response) => {
    if (response.ok) {
      return console.log(response.json());
    }
    throw new Error('Something went wrong');
  })
  .catch((error) => {
    console.log(error)
  });
};