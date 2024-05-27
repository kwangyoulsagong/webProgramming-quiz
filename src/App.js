import React, { useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    //프로미스 방법
    fetch("http://localhost:3001/web") // db.json을로 json-server로 3001번 포트로 연결
      .then((response) => response.json())
      .then((result) => {
        localStorage.setItem("webData", JSON.stringify(result));
        const storedData = JSON.parse(localStorage.getItem("webData"));
        setData(Array.isArray(storedData) ? storedData : []);
      })
      .catch((error) => console.error("fetching 생긴 에러", error));
  };
  // const fetchData = async () => { 비동기 함수
  //   try {
  //     const response = await fetch("http://localhost:3001/web");
  //     const result = await response.json();
  //     localStorage.setItem("webData", JSON.stringify(result));
  //     const storedData = JSON.parse(localStorage.getItem("webData"));
  //     setData(Array.isArray(storedData) ? storedData : []);
  //   } catch (error) {
  //     console.error("fetching 생긴 에러", error);
  //   }
  // };

  return (
    <div className="App">
      <button onClick={fetchData}>클릭</button>
      <div id="output">
        {data.length > 0 &&
          data.map((item, index) => <p key={index}>{item.class}</p>)}
      </div>
    </div>
  );
}

export default App;
