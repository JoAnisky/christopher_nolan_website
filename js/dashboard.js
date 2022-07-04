function mailList(){

    fetch('mail-list.php')
    .then(response => {
        if (!response.ok) {
          throw new Error(`Error status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
      // Parcourt la longueur du fichier JSON
      for (i=0; i<data.length; i++){
          const template = document.querySelector('#productrow');
          const tBody = document.querySelector('tbody');

          let clone = document.importNode(template.content, true);
          let td = clone.querySelectorAll("td");

          td[0].textContent = `${data[i].email}`;
          td[1].textContent = `${data[i].date_inscription}`;
          tBody.appendChild(clone);
      }
    })
    .catch(err => {console.log(err)});
};

mailList();