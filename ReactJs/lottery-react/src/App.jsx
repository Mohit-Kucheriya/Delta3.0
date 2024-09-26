import "./App.css";
import Lottery from "./Lottery";

function App() {
  return (
    <>
      <Lottery n={3} winningSum={15} />
      <Lottery n={5} winningSum={26} />
    </>
  );
}

export default App;
