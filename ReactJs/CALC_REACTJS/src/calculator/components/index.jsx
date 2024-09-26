import "./style.css";
import Input from "./input";
import Button from "./button";
import { useState } from "react";

const Add = "+";
const Sub = "-";
const Mul = "*";
const Div = "/";
const Equal = "=";

const Operations = [Add, Sub, Mul, Div, Equal];

function Calculator() {
  const [operandA, setOperandA] = useState("");
  const [operandB, setOperandB] = useState("");
  const [result, setResult] = useState("");
  const [operatiion, setOperation] = useState("");
  const [currentNumber, setCurrentNumber] = useState("");

  const nums = new Array(10);
  function onInput(value) {
    console.log(value);
  }

  function handelClick() {
    console.log("handelClick");
  }

  return (
    <div>
      <Input placeholder="Enter Number" onInput={onInput} />
      <div>
        {[...nums].map((_, index) => {
          return <Button label={index} onClick={handelClick} key={index} />;
        })}
      </div>
      <div>
        {Operations.map((o) => {
          return <Button label={o} key={o} />;
        })}
      </div>
    </div>
  );
}

export default Calculator;
