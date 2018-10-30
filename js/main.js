document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");
  // add listener to gameboard on click

  var game_board = document.querySelector('.game-board');
  var turn = 'X'

  game_board.addEventListener('click', function(event){
    if(event.target.innerText === '[]'){
      event.target.innerText = turn;
      event.target.classList.add(turn);
    }
    if(turn === 'X'){
      turn = 'O'
    }else if(turn === 'O'){
      turn = 'X'
    }
    var locations = createLocationArray()
    checkWinner(locations);
  });



  function createLocationArray(){
    var locations = document.querySelectorAll('.location')
    var organized_locations = [];
    var og_index = 0;

    for(let i = 0; i < 3; i++){  //row
      organized_locations[i]=[];
      for(let j = 0; j < 3; j++){ //column
        organized_locations[i][j] = locations[og_index];
        og_index++;
      }
    }
    return organized_locations
  }


  function checkWinner(list_locations){
    // horizontal check
    var row1 = [];
    var row2 = [];
    var row3 = [];

    var col1 = [];
    var col2 = [];
    var col3 = [];

    var diag1 = [];
    var diag2 = [];

    var j = 2;
    for(let i = 0; i<3; i++){
      row1[i] = list_locations[0][i];
      row2[i] = list_locations[1][i];
      row3[i] = list_locations[2][i];
      col1[i] = list_locations[i][0];
      col2[i] = list_locations[i][1];
      col3[i] = list_locations[i][2];
      diag1[i] = list_locations[i][i];
      diag2[i] = list_locations[j][j];
      j--;
    }

    testVector(row1);
    testVector(row2);
    testVector(row3);
    testVector(col1);
    testVector(col2);
    testVector(col3);
    testVector(diag1);
    testVector(diag2);

  }

  function testVector(vector){
    var countX = 0;
    var countO = 0;
    vector.forEach(function(element){
      if(element.classList.contains('X')){
        countX++;
      }else if(element.classList.contains('O')){
        countO++;
      }
    });

    if(countX === 3){
      console.log('X wins');
    }else if(countO === 3){
      console.log('O wins');
    }else{
      console.log('No Winner Yet!')
    }

  }


  //
  // function checkVertical(){
  //
  // }
  //
  // function checkDiagonal(){
  //
  // }

});
