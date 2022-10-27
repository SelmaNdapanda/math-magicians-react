import React, { useState } from 'react';
import './App.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calc, setCalc] = useState({ total: 0, operation: null, next: null });

  const clickHandler = (e) => {
    setCalc(calculate(calc, e.target.innerText));
  };

  return (
    <>
      <div className="container">
        <div className="display" id="display">
          {calc.total}
          {' '}
          {calc.operation}
          {' '}
          {calc.next}
        </div>
        <div className="keypads">
          <button type="button" onClick={clickHandler} className="left-btns" id="clear">AC</button>
          <button type="button" onClick={clickHandler} className="left-btns plusminus" name="+/-">+/-</button>
          <button type="button" onClick={clickHandler} className="left-btns mod" name="%"> % </button>
          <button type="button" onClick={clickHandler} className="right-btns div" name="/"> &divide; </button>
          <button type="button" onClick={clickHandler} className="left-btns" name="7"> 7 </button>
          <button type="button" onClick={clickHandler} className="left-btns" name="8"> 8 </button>
          <button type="button" onClick={clickHandler} className="left-btns" name="9"> 9 </button>
          <button type="button" onClick={clickHandler} className="right-btns times" name="*"> x </button>
          <button type="button" onClick={clickHandler} className="left-btns" name="4"> 4 </button>
          <button type="button" onClick={clickHandler} className="left-btns" name="5"> 5 </button>
          <button type="button" onClick={clickHandler} className="left-btns" name="6"> 6 </button>
          <button type="button" onClick={clickHandler} className="right-btns minus" name="-"> - </button>
          <button type="button" onClick={clickHandler} className="left-btns" name="1"> 1 </button>
          <button type="button" onClick={clickHandler} className="left-btns" name="2"> 2 </button>
          <button type="button" onClick={clickHandler} className="left-btns" name="3"> 3 </button>
          <button type="button" onClick={clickHandler} className="right-btns plus" name="+"> + </button>
          <button type="button" onClick={clickHandler} className=" left-btns zero" name="0"> 0 </button>
          <button type="button" onClick={clickHandler} className="left-btns" name="."> . </button>
          <button type="button" onClick={clickHandler} className="right-btns" name="="> = </button>
        </div>
      </div>
    </>
  );
};

export default Calculator;
