const Form = ({
  inputValue,
  setInputValue,
  convertFrom,
  setConvertFrom,
  convertTo,
  setConvertTo,
  result,
  setResult,
}) => {
  const handleInput = (e) => {
    setInputValue(e.target.value);
  };
  const handleSelect1 = (e) => {
    setConvertFrom(e.target.value);
  };
  const handleSelect2 = (e) => {
    setConvertTo(e.target.value);
  };
  const handleClearButton = (e) => {
    e.preventDefault();
    setInputValue("");
    setResult("Result:");
  };
  const handleCalculateButton = (e) => {
    e.preventDefault();

    if (inputValue === "") {
      setResult(
        <text className="error-message">
          ERROR:~ Enter A Value And Try Again!
        </text>
      );
    } else if (convertFrom === "kilograms" && convertTo === "grams") {
      setResult(
        inputValue +
          " " +
          convertFrom +
          " is equal to " +
          inputValue * 1000 +
          " " +
          convertTo
      );
    } else if (convertFrom === "meters" && convertTo === "centimeters") {
      setResult(
        inputValue +
          " " +
          convertFrom +
          " is equal to " +
          inputValue * 100 +
          " " +
          convertTo
      );
    } else if (convertFrom === "kilograms" && convertTo === "grams") {
      setResult(
        inputValue +
          " " +
          convertFrom +
          " is equal to " +
          inputValue * 1000 +
          " " +
          convertTo
      );
    } else if (convertFrom === "kilograms" && convertTo === "grams") {
      setResult(
        inputValue +
          " " +
          convertFrom +
          " is equal to " +
          inputValue * 1000 +
          " " +
          convertTo
      );
    } else {
      setResult("WRONG CONVERSION!");
    }
  };

  return (
    <form>
      <div className="input-form">
        <input
          onChange={handleInput}
          value={inputValue}
          className="input-box"
          id="input"
          type="text"
          placeholder="Enter value"
        />
      </div>
      <br />
      <div className="selects">
        <select
          onChange={handleSelect1}
          className="selector1"
          name="convertFrom"
          id="convertFrom"
        >
          <option value="kilograms">Kilogram</option>
          <option value="meters">Meters</option>
          <option value="liters">Liters</option>
          <option value="inches">Inches</option>
        </select>

        <select
          onChange={handleSelect2}
          className="selector2"
          name="convertFrom"
          id="convertTo"
        >
          <option value="grams">Grams</option>
          <option value="centimeters">Centimeters</option>
          <option value="liters"></option>
          <option value="inches">Inches</option>
        </select>
      </div>
      <br />
      <div className="buttons">
        <div className="button1">
          <button
            onClick={handleClearButton}
            className="button"
            id="clearButton"
          >
            clear
          </button>
        </div>
        <div className="button2">
          <button
            onClick={handleCalculateButton}
            className="button"
            id="calculateButton"
          >
            calculate
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
