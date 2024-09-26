import { useState } from "react";

function App() {
  const [color, setColor] = useState("");

  return (
    <div
      className="w-full h-screen duration-150"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-wrap justify-center fixed bottom-10 inset-x-0 px-12">
        <div className="flex flex-wrap justify-center bg-white px-3 py-2 rounded-full gap-3 shadow-xl">
          <button
            onClick={() => setColor("red")}
            className="px-5 py-2 rounded-full outline-none"
            style={{ backgroundColor: "red", color: "white" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("blue")}
            className=" px-5 py-2 rounded-full outline-none"
            style={{ backgroundColor: "blue", color: "white" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("green")}
            className=" px-5 py-2 rounded-full outline-none"
            style={{ backgroundColor: "green", color: "white" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("black")}
            className=" px-5 py-2 rounded-full outline-none"
            style={{ backgroundColor: "black", color: "white" }}
          >
            Black
          </button>
          <button
            onClick={() => setColor("orange")}
            className="px-5 py-2 rounded-full outline-none"
            style={{ backgroundColor: "orange", color: "black" }}
          >
            Orange
          </button>
          <button
            onClick={() => setColor("pink")}
            className=" px-5 py-2 rounded-full outline-none"
            style={{ backgroundColor: "pink", color: "black" }}
          >
            Pink
          </button>
          <button
            onClick={() => setColor("olive")}
            className=" px-5 py-2 rounded-full outline-none"
            style={{ backgroundColor: "olive", color: "black" }}
          >
            Olive
          </button>
          <button
            onClick={() => setColor("yellow")}
            className=" px-5 py-2 rounded-full outline-none"
            style={{ backgroundColor: "yellow", color: "black" }}
          >
            Yellow
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
