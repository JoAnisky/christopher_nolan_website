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
      // initialise le tableau
      const myArr = [];
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
          tBody.appendChild(clone);

          // Bouton delete suppression au click
          const tdSup = document.querySelectorAll('.delete-rows');

          tdSup.forEach(elem => {
              elem.addEventListener('click', (e)=> {
                  const mailDeleteId = e.currentTarget.dataset.value;
                  elem.parentElement.remove();
                  const getMethod = {
                    method: 'GET'
                    // We send data in JSON format
                  }
                  fetch(`delete-user.php?mailToSuppID=${mailDeleteId}`, getMethod)
                  .then(response => {
                    if (!response.ok) {
                      throw new Error(`Error status: ${response.status}`);
                    }
                    return response.json();
                  })
              });
          });
          // Fin bouton Delete
      }
  // Fin boucle affichage liste adresse mails
  });
}
// Fetch pour l'affichage des adresses mails
mailList(`mail-list.php?value=0`);
let nbrShowMore = 0;
const showMoreBtn = document.getElementById('btn-show-more');

showMoreBtn.addEventListener('click', () =>{
  nbrShowMore = nbrShowMore + 10;
  mailList(`mail-list.php?value=${nbrShowMore}`);
})

// Tri de l'affichage des adresses mails
const orderMail = document.getElementById('order-mail');
let moduloMail = 0;
let b;

orderMail.addEventListener('click', function(){
  // moduloMail ++;
  triAlpha(0);

  // if (isEven(moduloMail)){
  //   console.log("pair");
  // }else{
  //   console.log("impair");
  // }
});

const orderDate = document.getElementById('order-date');
orderDate.addEventListener('click', function(){
  triAlpha(1);
});
// Tri à bulles de la liste d'adresse mails
function triAlpha(a){
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
function isEven(m){
  return m % 2 === 0;
};