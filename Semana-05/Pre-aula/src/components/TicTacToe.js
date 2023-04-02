/*
Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web
Dev: BRUNO PAIVA SOUZA - 2111579
01/04/2023
*/

import React, { useState } from "react";
import "./TicTacToe.css";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  const checkWinner = (board) => {
    const possibleWins = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
      [0, 4, 8], [2, 4, 6] // Diagonais
    ];
    for (let i = 0; i < possibleWins.length; i++) {
      const [a, b, c] = possibleWins[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const handleClick = (i) => {
    if (board[i] || winner) return;
    const newBoard = [...board];
    newBoard[i] = player;
    setBoard(newBoard);
    setPlayer(player === "X" ? "O" : "X");
    setWinner(checkWinner(newBoard));
  };

  const renderCell = (i) => {
    return (
      <div className="cell" onClick={() => handleClick(i)}>
        {board[i]}
      </div>
    );
  };

  const renderBoard = () => {
    return (
      <div className="board">
        {renderCell(0)}
        {renderCell(1)}
        {renderCell(2)}
        {renderCell(3)}
        {renderCell(4)}
        {renderCell(5)}
        {renderCell(6)}
        {renderCell(7)}
        {renderCell(8)}
      </div>
    );
  };

  const renderStatus = () => {
    if (winner) {
      return `${winner} ganhou!`;
    } else if (board.every((cell) => cell)) {
      return "Empate!";
    } else {
      return `Jogador atual: ${player}`;
    }
  };

  return (
    <div className="tic-tac-toe">
      <h1>Jogo da Velha</h1>
      {renderBoard()}
      <div className="status">{renderStatus()}</div>
    </div>
  );
};

export default TicTacToe;
