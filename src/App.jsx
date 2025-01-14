import React, {useState} from 'react'
import DisplayWindow from "./Components/DisplayWindow"
import Keys from "./Components/Keys";

const App = () => {
  {/* use state needs to allways be imported, due to it being a hook */}
  const [previousValue, setPreviousValue] = useState("");
  const [currentValue, setCurrentValue] = useState("");
  const [operation, setOperation] = useState(null);
  const [output, setOutput] = useState("");

  
  const handleButtonClick = (value) => {
    // if !isNaN(value) means that if i have a string that is a number it will be true, even if you have a int it will be true
    // but if you have alphabets/alphanumeric values the ! will negate to true and will state that those values are not a number
    if (!isNaN(value) || value === ".") {
      // Number or decimal input
      setCurrentValue((prev) => prev + value);
    } else if (value === "Ac") {
      // Clear all
      setPreviousValue("");
      setCurrentValue("");
      setOperation(null);
      setOutput("");
    } else if (value === "Del") {
      // Delete last character
      setCurrentValue((prev) => prev.slice(0, -1));
    } else if (value === "=") {
      // Calculate result
      calculateResult();
    } else {
      // Operator input
      if (currentValue) {
        setPreviousValue(currentValue);
        setCurrentValue("");
        setOperation(value);
      }
    }
  };

  const calculateResult = () => {
    const num1 = parseFloat(previousValue);
    const num2 = parseFloat(currentValue);
    let result;


    if (previousValue && currentValue && operation) {
      switch (operation) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "x":
          result = num1 * num2;
          break;
        case "÷":
          result = num1 / num2;
          break;
        case "sin":
            result = Math.sin(num1);
            break;
        case "cos":
            result = Math.cos(num1);
            break;
        case "tan":
            result = Math.tan(num1);
            break;
        case "√":
          result = Math.sqrt(num1);
          break;
        case "^":
          result = Math.pow(num1, num2);
          break;

        default:
          result = currentValue;
      }

      setOutput(result.toString());
    }

  };

  const calculatorUI = `container mx-auto max-w-[25rem] p-3 rounded-2xl flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-gray-400 to-gray-800 shadow-2xl shadow-slate-950`;

  return (
    <>
      <section className="h-screen flex items-center">
        <div className={calculatorUI}>
          <section className="flex justify-between items-center w-full">
            <img src="../src/assets/images/appleIcon.png" alt="apple-logo" className="w-6 h-6"/>
            <h1 className="text-center text-xl font-semibold text-white">Scientific Calculator</h1>
            <button className="active:shadow-neumorphism-dark-inset rounded-full p-1">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M479.84-168.46q-22.34 0-38.09-15.91Q426-200.28 426-222.62t15.91-38.09q15.91-15.75 38.25-15.75t38.09 15.91Q534-244.64 534-222.3t-15.91 38.09q-15.91 15.75-38.25 15.75Zm0-257.54q-22.34 0-38.09-15.91Q426-457.82 426-480.16t15.91-38.09Q457.82-534 480.16-534t38.09 15.91Q534-502.18 534-479.84t-15.91 38.09Q502.18-426 479.84-426Zm0-257.54q-22.34 0-38.09-15.91Q426-715.36 426-737.7t15.91-38.09q15.91-15.75 38.25-15.75t38.09 15.91Q534-759.72 534-737.38t-15.91 38.09q-15.91 15.75-38.25 15.75Z"/></svg>
            </button>
          </section>
          
          <DisplayWindow previous={previousValue} operator={operation} current={currentValue} output={output}/>
          <Keys onButtonClick={(value) => handleButtonClick(value)}/>
        </div>
      </section>
    </>
  )
}

export default App;


