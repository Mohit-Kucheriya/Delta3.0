import { useState } from "react";
import "./Lottery.css";
import { genRandom, sum } from "../helper";
import Ticket from "./Ticket";

export default function Lottery({ n = 3, winningSum = 15 }) {
  let [lottery, setLottery] = useState(genRandom(n));
  let isWinning = sum(lottery) === winningSum;

  function newTicket() {
    setLottery(genRandom(n));
  }

  return (
    <div>
      <h1>Lottery Game!</h1>
      <h3>To win the Lottery the sum of digit be {winningSum}</h3>
      <Ticket ticket={lottery}/>
      <div>
        <button onClick={newTicket}>Buy new Ticket</button>
      </div>

      <h3>{isWinning && "Congratulation, You won!"}</h3>
    </div>
  );
}
