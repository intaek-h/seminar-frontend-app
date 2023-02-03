import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Board } from "./@core/types/type";

function App() {
  const [count, setCount] = useState(0);
  const [boards, setBoards] = useState<Board[]>([]);

  return (
    <div className="App">
      {boards.map((item) => (
        <>
          <p key={item.id}>{item.content}</p>
        </>
      ))}
    </div>
  );
}

export default App;
