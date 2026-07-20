import Square from "./Square";
import './Board.css'
import { useState } from "react";

const lines = [
        [0, 1, 2], // top row
        [3, 4, 5], // middle row
        [6, 7, 8], // bottom row
        [0, 3, 6], // left column
        [1, 4, 7], // middle column
        [2, 5, 8], // right column
        [0, 4, 8], // diagonal
        [2, 4, 6]  // diagonal
    ]
function Board() {
    function handleClick(index) {
        if(winner){
            return;
        }
        if (board[index]) {
            alert("This square is already clicked");
            return;
        }
        const newBoard = [...board];
        if (isNext) {
            newBoard[index] = "X";
        } else {
            newBoard[index] = "O";
        }
        setBoard(newBoard);
        setIsNext(!isNext);
        console.log(index);
        
    }

    function calculateWinner(board){
        for(const line of lines){
            const [a,b,c] = line;
            if(board[a]!=null && board[a]==board[b] && board[a]==board[c]){
                return board[a];
            }
        }
        return null;
    }

    function resetGame(){
        setBoard(Array(9).fill(null));
        setIsNext(true);
        calculateWinner(board);
    }


    const [board, setBoard] = useState(Array(9).fill(null));
    const [isNext, setIsNext] = useState(true);
    const winner = calculateWinner(board);
    
    return (
        <div className="board">
            <div className="row">
                <Square value={board[0]} index={0} onSquareClick={handleClick} />
                <Square value={board[1]} index={1} onSquareClick={handleClick} />
                <Square value={board[2]} index={2} onSquareClick={handleClick} />
            </div>
            <div className="row">
                <Square value={board[3]} index={3} onSquareClick={handleClick} />
                <Square value={board[4]} index={4} onSquareClick={handleClick} />
                <Square value={board[5]} index={5} onSquareClick={handleClick} />
            </div>
            <div className="row">
                <Square value={board[6]} index={6} onSquareClick={handleClick} />
                <Square value={board[7]} index={7} onSquareClick={handleClick} />
                <Square value={board[8]} index={8} onSquareClick={handleClick} />
            </div>
            <h2>Winner: {winner}</h2>
            <button onClick={resetGame}> 
                Reset
            </button>
        </div>
    );
}



export default Board;