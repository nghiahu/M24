import React, { Component } from 'react';
interface State {
  num1: number;
  num2: number;
}

export default class Calculation extends Component <{},State>{
    constructor(props:{}) {
        super(props);
        this.state = {
            num1: 10,
            num2: 10,
        };
    }
    add = () => {
        const { num1, num2 } = this.state;
        return num1 + num2;
    };
    subtract = () => {
        const { num1, num2 } = this.state;
        return num1 - num2;
    };
    multiply = () => {
        const { num1, num2 } = this.state;
        return num1 * num2;
    };
    divide = () => {
        const { num1, num2 } = this.state;
        return num1 / num2;
    };
    
    render() {
        return (
            <div>
              Bài tập 2
                <h2>Danh Sách kết quả</h2>
                <ul>
                    <li>{this.state.num1} + {this.state.num2} = {this.add()}</li>
                    <li>{this.state.num1} - {this.state.num2} = {this.subtract()}</li>
                    <li>{this.state.num1} * {this.state.num2} = {this.multiply()}</li>
                    <li>{this.state.num1} / {this.state.num2} = {this.divide()}</li>
                </ul>
            </div>
        );
    }
}
