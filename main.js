// GET INPUT ELEMENT
let filterInput = document.getElementById('filterInput');
// ADD EVENT LISTENER
filterInput.addEventListener('keyup', filterNames);

function filterNames() {
  // GET INPUT VALUE
  let filterValue = document.getElementById('filterInput').value.toUpperCase();

  // GET LIST
  let ul = document.getElementById('names');
  // GET  LIST ITEMS
  let li = ul.querySelectorAll('li.collection-item');

  // LOOP THROUGH COLLECTION-ITEMS
  for(let i = 0;i < li.length;i++) {
     let a = li[i].getElementsByTagName('a')[0];
    // IF MATCHES
    if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      li[i].style.display = '';
    } else {
      li[i].style.display = 'none';
    }
  }
}
