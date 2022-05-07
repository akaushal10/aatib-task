import { useState } from "react";
import Content from "./Content";
import { Header } from "./Header";

function App() {
  const [result, setResult] = useState([]);
  return (
    <div className="App">
      <Header result={result} setResult={setResult} />
      <Content result={result} />
    </div>
  );
}

export default App;
