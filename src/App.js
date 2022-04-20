import "./App.css";
import Header from "./Header";
import Form from "./Form";
import Result from "./Result";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [convertFrom, setConvertFrom] = useState("kilograms");
  const [convertTo, setConvertTo] = useState("grams");
  const [result, setResult] = useState("Result:");

  return (
    <div className="container">
      <div className="secondary">
        <Header />
        <Form
          inputValue={inputValue}
          setInputValue={setInputValue}
          convertFrom={convertFrom}
          setConvertFrom={setConvertFrom}
          convertTo={convertTo}
          setConvertTo={setConvertTo}
          result={result}
          setResult={setResult}
        />
        <Result result={result} />
      </div>
    </div>
  );
}

export default App;
