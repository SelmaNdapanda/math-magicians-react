import React from 'react';
import './App.css';

const Calculator = () => (
  <>
    <div className="container">
      <input type="text" className="display" id="display" value={0} />
      <div className="keypads">
        <button type="button" className="left-btns" id="clear">
          AC
        </button>
        <button type="button" className="left-btns" name="+/-">
          +/-
        </button>
        <button type="button" className="left-btns" name="%">
          %
        </button>
        <button type="button" className="right-btns" name="/">
          &divide;
        </button>
        <button type="button" className="left-btns" name="7">
          7
        </button>
        <button type="button" className="left-btns" name="8">
          8
        </button>
        <button type="button" className="left-btns" name="9">
          9
        </button>
        <button type="button" className="right-btns" name="*">
          &times;
        </button>
        <button type="button" className="left-btns" name="4">
          4
        </button>
        <button type="button" className="left-btns" name="5">
          5
        </button>
        <button type="button" className="left-btns" name="6">
          6
        </button>
        <button type="button" className="right-btns" name="-">
          &ndash;
        </button>
        <button type="button" className="left-btns" name="1">
          1
        </button>
        <button type="button" className="left-btns" name="2">
          2
        </button>
        <button type="button" className="left-btns" name="3">
          3
        </button>
        <button type="button" className="right-btns" name="+">
          +
        </button>
        <button type="button" className=" left-btns zero" name="0">
          0
        </button>
        <button type="button" className="left-btns" name=".">
          .
        </button>
        <button type="button" className="right-btns" name="=">
          =
        </button>
      </div>
    </div>
  </>
);

export default Calculator;
