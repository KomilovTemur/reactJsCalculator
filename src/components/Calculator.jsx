/* eslint-disable */
import { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult("");
  };
  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <section className="cacl">
      <div className="cacl-items">
        <div className="result">
          <input type="text" disabled value={result} />
        </div>
        <div className="calc-func">
          <ul>
            <li>
              <button name="1" onClick={handleClick}>
                1
              </button>
            </li>
            <li>
              <button name="2" onClick={handleClick}>
                2
              </button>
            </li>
            <li>
              <button name="3" onClick={handleClick}>
                3
              </button>
            </li>
            <li>
              <button name="+" onClick={handleClick}>
                +
              </button>
            </li>
          </ul>
          <ul>
            <li>
              <button name="4" onClick={handleClick}>
                4
              </button>
            </li>
            <li>
              <button name="5" onClick={handleClick}>
                5
              </button>
            </li>
            <li>
              <button name="6" onClick={handleClick}>
                6
              </button>
            </li>
            <li>
              <button name="-" onClick={handleClick}>
                -
              </button>
            </li>
          </ul>
          <ul>
            <li>
              <button name="7" onClick={handleClick}>
                7
              </button>
            </li>
            <li>
              <button name="8" onClick={handleClick}>
                8
              </button>
            </li>
            <li>
              <button name="9" onClick={handleClick}>
                9
              </button>
            </li>
            <li>
              <button name="*" onClick={handleClick}>
                *
              </button>
            </li>
          </ul>
          <ul>
            <li>
              <button name="c" onClick={clear}>
                c
              </button>
            </li>
            <li>
              <button name="0" onClick={handleClick}>
                0
              </button>
            </li>
            <li>
              <button name="=" onClick={calculate}>
                =
              </button>
            </li>
            <li>
              <button name="/" onClick={handleClick}>
                &divide;
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Calculator;
