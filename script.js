
function chekSpot(num, row, coll) {

  for (var i = 0; i < 9; i++) {
    if(i != coll){
      const obj = document.getElementById(row+','+i);
      console.log(obj.value);
      if(obj.value == num){
        console.log(false);
      }
    }
  }
  for (var i = 0; i < 9; i++) {
    if(i != row){
      const obj = document.getElementById(i+','+coll);
      console.log(obj.value);
      if(obj.value == num){
        console.log(false);
      }
    }
  }

}


function createGamePlate() {

  const root = document.getElementById('root');

  for (var i = 0; i < 9; i++) {

    const tr = document.createElement('tr');
    root.appendChild(tr);

    for (var j = 0; j < 9; j++) {
      const box = document.createElement('input');
      box.setAttribute('id', i+','+j);
      box.setAttribute('maxlength', '1');
      box.setAttribute('onchange', 'chekSpot(value, '+i+', '+j+')');
      tr.appendChild(box);
    }
  }
}

createGamePlate();
