const prompt = require("prompt-sync")()

function winCheck(board, turn) {
    if (board[0][0]==turn && board[1][1]==turn && board[2][2]==turn) return true;
    if (board[1][0]==turn && board[1][1]==turn && board[1][2]==turn) return true;
    if (board[2][0]==turn && board[2][1]==turn && board[2][2]==turn) return true;
    if (board[0][0]==turn && board[1][0]==turn && board[2][0]==turn) return true;
    if (board[0][1]==turn && board[1][1]==turn && board[2][1]==turn) return true;
    if (board[0][2]==turn && board[1][2]==turn && board[2][2]==turn) return true;
    if (board[0][0]==turn && board[1][1]==turn && board[2][2]==turn) return true;
    if (board[0][2]==turn && board[1][1]==turn && board[2][0]==turn) return true;
    return false;
}

function viewBoard(board) {
    for (let i = 0; i < board.length; i++) {
        let str = "";
        for (let j = 0; j < board[i].length; j++) {
            str += board[i][j];
            if (j < board.length-1) str += ' | ';
        }
        console.log(str);
        if (i < board.length-1) console.log("---------")
    }
}

function makeMove(turn, board) {
    while (true) {
        const row = parseInt(prompt("Enter Row: "))
        const col = parseInt(prompt("Enter Column: "))
        if ((1 <= row && row <= 3 && 1 <= col && col <= 3) && (!isNaN(row) && !isNaN(col))) {
            if (board[row-1][col-1] == ' ') {
                board[row-1][col-1] = turn.toUpperCase();
                break;
            }
            else {
                if (board[row-1][col-1] == 'X') console.log("X already exists!")
                else console.log("O already exists !")
            }
        }
        else {
            console.log("Invalid Position !\nTry Again")
        }
    }
    viewBoard(board)
    return winCheck(board, turn);
}

const board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
]

let turn;
let win = false;
let turnCount = 0;

while (turnCount < 9) {
    if (turnCount & 1) turn = 'X';
    else turn = 'O';
    console.log(turn + "\'s Move:")
    win = makeMove(turn, board);
    if (win) {
        console.log(turn, "Won the Game!")
        break;
    }
    console.log()
    if (prompt("Press \"q\" to exit or anything else to continue: ") == 'q') break;
    turnCount++;
}

if (!win) console.log("It's a tie!")
