// I  react we use ... spread opaerator in objects and array case to get the state update
import { useState } from "react";

export default function LudoBoard() {
  let [moves, setMoves] = useState({ blue: 0, red: 0, yellow: 0, green: 0 });

  function blueHandler() {
    //   here new updated value depends upon the prevvious value, so we have yo use the callback
    setMoves((prevMoves) => {
      return { ...prevMoves, blue: prevMoves.blue + 1 };
    });
  }
  function redHandler() {
    //   here new updated value depends upon the prevvious value, so we have yo use the callback
    setMoves((prevMoves) => {
      return { ...prevMoves, red: prevMoves.red + 1 };
    });
  }
  function yellowHandler() {
    //   here new updated value depends upon the prevvious value, so we have yo use the callback
    setMoves((prevMoves) => {
      return { ...prevMoves, yellow: prevMoves.yellow + 1 };
    });
  }
  function greenHandler() {
    //   here new updated value depends upon the prevvious value, so we have yo use the callback
    setMoves((prevMoves) => {
      return { ...prevMoves, green: prevMoves.yellow + 1 };
    });
  }

  return (
    <div>
      <p>Game Begins!</p>
      <p>Blue moves = {moves.blue} </p>
      <button onClick={blueHandler} style={{ backgroundColor: "blue" }}>
        +1
      </button>
      <p>Red moves = {moves.red} </p>
      <button onClick={redHandler} style={{ backgroundColor: "red" }}>+1</button>
      <p>Yellow moves = {moves.yellow}</p>
      <button onClick={yellowHandler} style={{ backgroundColor: "yellow", color: "black" }}> +1</button>
      <p>Green moves = {moves.green} </p>
      <button onClick={greenHandler} style={{ backgroundColor: "green" }}> +1</button>
    </div>
  );
}
