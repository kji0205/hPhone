import React from 'react';
import ReactDOM from 'react-dom';
import './welcome.css'
import './calc.css'

export default class Calc extends React.Component {
    constructor(props) {
        super(props);
        // this.fnCalc = this.fnCalc.bind(this);
        this.state = {
            left: null,
            right: null,
            op: null,
            result: 0,
        };
    }
    fnTouch(e){
        if (this.state.left) {
            this.fnRight(e);
        } else {
            this.fnLeft(e);
        }
    }
    fnLeft(e) {
        console.log(e.currentTarget.innerText);
        this.setState({
            left: Number(e.currentTarget.innerText),
        })
        console.log(this.state.left);        
    }
    fnRight(e) {
        console.log(e.currentTarget.innerText);
        this.setState({
            right: Number(e.currentTarget.innerText),
        })
        console.log(this.state.right);        
    }
    fnAdd(p) {
        this.setState({
            result: this.state.left + this.state.right,
        })  
        console.log(this.state.result);        
        // let result = 0;
        // switch (c) {
        //     case '+':
        //         result = a + b;
        //         break;
        //     case '-':
        //         result = a - b;
        //         break;
        //     case '*':
        //         result = a * b;
        //         break;
        //     case '/':
        //         result = a / b;
        //         break;
        //     default:
        //         break;
        // }
        // console.log(result);
        // return (result)
    }
    componentDidMount(){
        if (this.state.left) {
            this.setState({
                result: this.state.left
            })
        }
        console.log(this.state.left);
    }
    render(){
        return (
        <div>
            <h1>Calc</h1>
            <div>
            <img className="bg" src="/img/P1080168.JPG" alt=""/>
            </div>
            <div className='calc calcDiv'>
                <table>
                <thead></thead>
                <tbody>
                <tr>
                    <td>C</td>
                    <td colSpan='3'>
                    <div className='input'>
                        <span className='left'>{this.state.left}</span>
                        <span className='op'>{this.state.op}</span>
                        <span className='right'>{this.state.right}</span>
                        <span className='result'>{this.state.result}</span>
                    </div>
                    </td>
                </tr>
                <tr>
                <td onClick={this.fnTouch.bind(this)}>7</td>
                <td onClick={this.fnTouch.bind(this)}>8</td>
                <td onClick={this.fnTouch.bind(this)}>9</td>
                <td onClick={this.fnAdd.bind(this)}>+</td>
                </tr>
                <tr>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>-</td>
                </tr>
                <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>*</td>
                </tr>
                <tr>
                <td colSpan='2'>0</td>
                <td>.</td>
                <td>/</td>
                </tr>
                </tbody>
                </table>
            </div>
        </div>
        )
    }
}