import React, { useState } from "react";

function TicTacToe() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);
    const [winner, setWinner] = useState(null);
    const [winningCombination, setWinningCombination] = useState([]);

    const decideWinner = (board) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return { winner: board[a], combination: lines[i] };
            }
        }
        return null;
    };

    const handleClick = (index) => {
        if (winner || board[index]) return;

        const boardCopy = [...board];
        boardCopy[index] = isXTurn ? "X" : "O";
        setBoard(boardCopy);
        setIsXTurn(!isXTurn);

        const result = decideWinner(boardCopy);
        if (result) {
            setWinner(result.winner);
            setWinningCombination(result.combination);
        }
    };

    return (
        <div className="full-game">
            <h1>TicTacToe</h1>
            {winner && <h1>Winner: {winner}</h1>}
            <div className="board">
                {board.map((val, index) => (
                    <GameBox 
                        key={index} 
                        val={val} 
                        onPlayerClick={() => handleClick(index)} 
                        isWinning={winningCombination.includes(index)}
                    />
                ))}
            </div>
        </div>
    );
}

function GameBox({ val, onPlayerClick, isWinning }) {
    const styles = {
        color: val === "X" ? "green" : "red",
        backgroundColor: isWinning ? "rgb(175, 221, 241)" : "white",
        border: isWinning ? "2px solid black" : "1px solid black"
    };
    return (
        <div className="game-box" style={styles} onClick={onPlayerClick}>
            {val}
        </div>
    );
}

export default TicTacToe;
