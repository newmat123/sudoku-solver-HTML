

function createPlate() {

  const root = document.getElementById('root');
  var id = 0;

  for (var i = 0; i < 9; i++) {

    const tr = document.createElement('tr');
    root.appendChild(tr);

    for (var j = 0; j < 9; j++) {
      const td = document.createElement('td');
      td.setAttribute('class', 'cell '+id);
      tr.appendChild(td);
      id++;
    }
  }
}

createPlate();
