
function used_in_row(num, row, coll){
  for (var i = 0; i < 9; i++) {
    if(i != coll){
      const obj = document.getElementById(row+','+i);

      if(obj.value == num){
        document.getElementById(row+','+coll).style.color = "red";
        return true;
      }
    }
  }
  return false;
}

function used_in_col(num, row, coll){
  for (var i = 0; i < 9; i++) {
    if(i != row){
      const obj = document.getElementById(i+','+coll);

      if(obj.value == num){
        document.getElementById(row+','+coll).style.color = "red";
        return true;
      }
    }
  }
  return false;
}

function used_in_box(num, row, coll){
  var box_r = Math.floor(row / 3);
  var box_c = Math.floor(coll / 3);

  for (var r = box_r * 3; r < box_r * 3 + 3; r++) {
    for (var c = box_c * 3; c < box_c * 3 + 3; c++) {
      if(r != row && c != coll){
        const obj = document.getElementById(r+','+c);

        if(obj.value == num){
          document.getElementById(row+','+coll).style.color = "red";
          return true;
        }
      }
    }
  }
  return false;
}

function chekSpot(num, row, coll) {

//her h9hfjir5rf6ty7g8huj9iko0p+læ´åø mangler
  return used_in_row

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
