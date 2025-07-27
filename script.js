
    let board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ];
    let currentPlayer = "X";
    let gameOver = false;

    let pointsX = 0;
    let pointsY = 0;

    function makeMove(row, col) {
      if (gameOver || board[row][col] !== "") return;

      board[row][col] = currentPlayer;
      const index = row * 3 + col;
      document.querySelectorAll(".board button")[index].textContent = currentPlayer;

      if (checkWin()) {
        document.getElementById("status").textContent = "Player " + currentPlayer + " wins!";
        if (currentPlayer === "X") {
          pointsX++;
          document.getElementById("scoreX").textContent = pointsX;
        } else {
          pointsY++;
          document.getElementById("scoreY").textContent = pointsY;
        }
        gameOver = true;
      } else if (checkDraw()) {
        document.getElementById("status").textContent = "It's a draw!";
        gameOver = true;
      } else {
        currentPlayer = currentPlayer === "X" ? "Y" : "X";
        document.getElementById("status").textContent = "Player " + currentPlayer + "'s turn";
      }
    }

    function checkWin() {
      for (let i = 0; i < 3; i++) {
        if (board[i][0] && board[i][0] === board[i][1] && board[i][1] === board[i][2]) return true;
        if (board[0][i] && board[0][i] === board[1][i] && board[1][i] === board[2][i]) return true;
      }
      if (board[0][0] && board[0][0] === board[1][1] && board[1][1] === board[2][2]) return true;
      if (board[0][2] && board[0][2] === board[1][1] && board[1][1] === board[2][0]) return true;
      return false;
    }

    function checkDraw() {
      return board.flat().every(cell => cell !== "");
    }

    function resetGame() {
      board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
      ];
      currentPlayer = "X";
      gameOver = false;
      document.querySelectorAll(".board button").forEach(btn => btn.textContent = "");
      document.getElementById("status").textContent = "Player X's turn";
    }

    function resetScores() {
      pointsX = 0;
      pointsY = 0;
      document.getElementById("scoreX").textContent = "0";
      document.getElementById("scoreY").textContent = "0";
    }