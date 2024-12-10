let board2d = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 'x', 0]
];


function setX(i, j) {
  board2d[i][j] = 'x';
}


setX(0, 1);
setX(2, 0);

showConsoleBoard(board2d);


function showConsoleBoard(board) { 
  let boardStr = "";
  for (let i = 0; i < board.length; i++) {
    boardStr += "|";    

    for (let j = 0; j < board[i].length; j++) {
      boardStr += board[i][j] + "|";
    }
    boardStr += "\n";
  }

  console.log(boardStr);
}
