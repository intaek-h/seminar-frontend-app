import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Board } from "./@core/types/type";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  const [boards, setBoards] = useState<Board[]>([]);

  useEffect(() => {
    const getArticles = async () => {
      const { data } = await axios.get<Board[]>(
        "http://localhost:3030/articles"
      );
      console.log(data);
      setBoards(data);
    };

    getArticles();
  }, []);

  return (
    <div className="App">
      {boards.map((item) => (
        <>
          <p key={item.id}>
            <b>{item.title}</b> {item.content} | {item.created_at}
          </p>
        </>
      ))}
    </div>
  );
}

export default App;
