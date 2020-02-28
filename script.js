var spot = [0,0];

function chekSpot(num, row, coll, setup) {

  for (var col = 0; col < 9; col++) {
    if(col != coll){
      const obj = document.getElementById(row+','+col);

      if(obj.value == num){
        document.getElementById(row+','+coll).style.color = "red";
        return false;
      }
    }
  }
  for (var ro = 0; ro < 9; ro++) {
    if(ro != row){
      const obj = document.getElementById(ro+','+coll);

      if(obj.value == num){
        document.getElementById(row+','+coll).style.color = "red";
        return false;
      }
    }
  }

  var box_row = Math.floor(row / 3);
  var box_coll = Math.floor(coll / 3);

  for (var r = box_row * 3; r < box_row * 3 + 3; r++) {
    for (var c = box_coll * 3; c < box_coll * 3 + 3; c++) {
      if(r != row && c != coll){
        const obj = document.getElementById(r+','+c);

        if(obj.value == num){
          document.getElementById(row+','+coll).style.color = "red";
          return false;
        }
      }
    }
  }
  if(setup){
    document.getElementById(row+','+coll).style.color = "orange";
  }else {
    document.getElementById(row+','+coll).style.color = "black";
  }
  return true;
}


function findEmptySlot() {
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      const obj = document.getElementById(i+','+j);
      console.log(obj.value);
      if(obj.value.length == 0){
        spot[0] = i;
        spot[1] = j;

        return true;
      }
    }
  }
  return false;
}


function solveSuduko(){

  if(findEmptySlot() != true){
    return true;
  }

  var x = spot[0];
  var y = spot[1];
  for (var num = 1; num < 10; num++) {
    if(chekSpot(num, x, y, false)){
      document.getElementById(x+','+y).value = num.toString();
      if(solveSuduko()){
        return true;
      }
      document.getElementById(x+','+y).value = '';
    }
  }
  return false;
}


function Start() {
  if(solveSuduko()){
    alert('done');
  }else {
    alert('not solvable');
  }
}


function createSodukoPlate() {

  const root = document.getElementById('root');

  for (var i = 0; i < 9; i++) {

    const tr = document.createElement('tr');
    root.appendChild(tr);

    for (var j = 0; j < 9; j++) {
      const box = document.createElement('input');
      box.setAttribute('id', i+','+j);
      box.setAttribute('maxlength', '1');
      box.setAttribute('onchange', 'chekSpot(value, '+i+', '+j+', true)');
      tr.appendChild(box);
    }
  }
}

createSodukoPlate();
