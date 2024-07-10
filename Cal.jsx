import  { useState } from 'react';
import './App.css';
export const Cal = () => {
  const [value, setValue] = useState('');
  const handleButtonClick = (input) => {
    if (input === '=') {
        try {
            const result = Function('return ' + value)();
            setValue(result.toString());
          } catch (error) {
            setValue('Error');
          }
    } else if (input === 'C') {
        setValue('');
    } else {
      setValue(value + input);
    }
  };
  return (
    <>
      <h1>Calculator</h1>
      <div className="cal">
        <input type="text" className="input" placeholder="0" value={value} readOnly />
        <div className="btns">
          <button onClick={() => handleButtonClick('0')}>0</button>
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button onClick={() => handleButtonClick('4')}>4</button>
        </div>
        <div className="btns">
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
        </div>
        <div className="btns">
          <button onClick={() => handleButtonClick('-')}>-</button>
          <button onClick={() => handleButtonClick('+')}>+</button>
          <button onClick={() => handleButtonClick('*')}>*</button>
          <button onClick={() => handleButtonClick('/')}>/</button>
          <button onClick={() => handleButtonClick('=')}>=</button>
        </div>
        <div className="clear">
          <button onClick={() => handleButtonClick('C')}>C</button>
        </div>
      </div>
    </>
  );
};

export default Cal;
