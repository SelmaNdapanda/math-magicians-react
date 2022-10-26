import React from 'react';
import './App.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    this.setState((state) => calculate(state, e.target.textContent));
  }

  render() {
    const { total, operation, next } = this.state;
    return (
      <>
        <div className="container">
          <div className="display" id="display">
            {total}
            {' '}
            {operation}
            {' '}
            {next}
          </div>
          <div className="keypads">
            <button type="button" onClick={this.clickHandler} className="left-btns" id="clear">AC</button>
            <button type="button" onClick={this.clickHandler} className="left-btns" name="+/-">+/-</button>
            <button type="button" onClick={this.clickHandler} className="left-btns" name="%"> % </button>
            <button type="button" onClick={this.clickHandler} className="right-btns" name="/"> &divide; </button>
            <button type="button" onClick={this.clickHandler} className="left-btns" name="7"> 7 </button>
            <button type="button" onClick={this.clickHandler} className="left-btns" name="8"> 8 </button>
            <button type="button" onClick={this.clickHandler} className="left-btns" name="9"> 9 </button>
            <button type="button" onClick={this.clickHandler} className="right-btns" name="*"> &times; </button>
            <button type="button" onClick={this.clickHandler} className="left-btns" name="4"> 4 </button>
            <button type="button" onClick={this.clickHandler} className="left-btns" name="5"> 5 </button>
            <button type="button" onClick={this.clickHandler} className="left-btns" name="6"> 6 </button>
            <button type="button" onClick={this.clickHandler} className="right-btns" name="-"> &ndash; </button>
            <button type="button" onClick={this.clickHandler} className="left-btns" name="1"> 1 </button>
            <button type="button" onClick={this.clickHandler} className="left-btns" name="2"> 2 </button>
            <button type="button" onClick={this.clickHandler} className="left-btns" name="3"> 3 </button>
            <button type="button" onClick={this.clickHandler} className="right-btns" name="+"> + </button>
            <button type="button" onClick={this.clickHandler} className=" left-btns zero" name="0"> 0 </button>
            <button type="button" onClick={this.clickHandler} className="left-btns" name="."> . </button>
            <button type="button" onClick={this.clickHandler} className="right-btns" name="="> = </button>
          </div>
        </div>
      </>
    );
  }
}

export default Calculator;
