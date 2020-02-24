var spot = [0,0];

function chekSpot(num, row, coll, setup) {

  //return used_in_row(num, row, coll), used_in_col(num, row, coll), used_in_box(num, row, coll);
  for (var i = 0; i < 9; i++) {
    if(i != coll){
      const obj = document.getElementById(row+','+i);

      if(obj.value == num){
        document.getElementById(row+','+coll).style.color = "red";
        return false;
      }
    }
  }
  for (var i = 0; i < 9; i++) {
    if(i != row){
      const obj = document.getElementById(i+','+coll);

      if(obj.value == num){
        document.getElementById(row+','+coll).style.color = "red";
        return false;
      }
    }
  }

  var box_r = Math.floor(row / 3);
  var box_c = Math.floor(coll / 3);

  for (var r = box_r * 3; r < box_r * 3 + 3; r++) {
    for (var c = box_c * 3; c < box_c * 3 + 3; c++) {
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

function findEmpty() {
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      const obj = document.getElementById(i+','+j);
      console.log(obj.value);
      if(obj.value.length == 0){
        spot[0] = i;
        spot[1] = j;
        console.log(spot[0]);
        console.log(spot[1]);
        return true;
      }
    }
  }
  return false;
}

function solveSuduko(){

  if(findEmpty() != true){
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

function Solve() {
  if(solveSuduko()){
    console.log("done");
  }else {
    console.log("not solveable");
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
      box.setAttribute('onchange', 'chekSpot(value, '+i+', '+j+', true)');
      tr.appendChild(box);
    }
  }
}

createGamePlate();
