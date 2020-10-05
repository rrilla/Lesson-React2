import React, { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([
    { id: 0, value: "A" },
    { id: 1, value: "B" },
    { id: 2, value: "C" },
    { id: 3, value: "D" },
  ]);

  return (
    <div>
      {data.map((
        d,
        i //화살표 함수에서 매개변수 하나일시 괄호 생략가능
      ) => (
        <h1 key={i}>
          번호 : {i} 값 : {d.value}
        </h1>
      ))}
    </div>
  );
}

export default App;
