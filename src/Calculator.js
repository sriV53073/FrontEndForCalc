import React, { Component } from 'react'
import io from "socket.io-client";
import styled from 'styled-components'
import ReactDOM from 'react-dom';
const socket = io();
const Title = styled.h1`
  position: absolute;
  top: 20%;
  left: 17%;
  @media (max-width: 1261px) {
    font-size: 25px;
  }
  @media (max-width: 917px) {
    font-size: 22px;
  }
  @media (max-width: 793px) {
    font-size: 20px;
  }
  @media (max-width: 717px) {
    font-size: 18px;
  }
  @media (max-width: 1000px) {
    left: 12%;
  }
  
  `
  const Answer = styled.h2`
  position: absolute;
  top: 50%;
  left: 43%;
  @media (max-width: 1000px) {
     left: 35%;
   }
  
  `
  const Buttons = styled.div`
  position: absolute;
  top: 60%;
  left: 45%;
  @media (max-width: 1000px) {
     left: 37%;
   }
  
  `
   const MyForm = styled.form`
   position: absolute;
   top: 40%;
   left: 37%;
   @media (max-width: 1000px) {
     left: 25%;
   }
   `
export class Calculator extends Component {
    constructor(props)
    {
        super(props);  
        this.state = {  
            data : localStorage.getItem('user5'),
            socket: null,
            valToSend: "",
            result: "",

         }  
         this.handleLogs = this.handleLogs.bind(this);
         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
         this.handleExit = this.handleExit.bind(this);
         this.myInputRef = React.createRef();
    }
    handleChange(event) {
        this.setState({valToSend: event.target.value});
      }
    
      handleSubmit(event) {
        console.log('A name was submitted: ' + this.state.value);
        this.socket.emit('hello', {val: this.state.valToSend, name:this.state.data});
        this.setState({valToSend: ""})
        event.preventDefault();
      }
    componentDidMount()
    {
        this.socket = io('https://calculator-socket.herokuapp.com/');
        this.socket.emit('join', {name: this.state.data});
        this.socket.on('helloRep', (data) => {
            console.log("Value Of Function is " + data.val)
            this.setState({result: data.val});
            console.log(this.state.result);
     });
     this.socket.on('logReturn', (data) => {
      console.log("Here");
      console.log("Value Of Function is " + data.val)
});
    }
    handleExit()
    {
      this. socket.emit('exit', {name: this.state.data});
      window.location.assign('/');
    }
    handleLogs()
    {
      console.log(this.state.data);
      fetch( `https://calculator-socket.herokuapp.com/log?name=${this.state.data}`)
      .then(response => response.blob())
        .then(blob => {
            var url = window.URL.createObjectURL(blob);
            var a = document.createElement('a');
            a.href = url;
            a.download =  `${this.state.data}.txt`;
            document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
            a.click();    
            a.remove();  //afterwards we remove the element again         
        });
    }
  render() {
    return (
        <div>
          <Title>Hey {this.state.data} Please Type In the Function You want the answer For</Title>
        <MyForm onSubmit={this.handleSubmit}>
        <label>
        Function: &nbsp;
          <input type="textBox" value={this.state.valToSend} onChange={this.handleChange} />
        </label>
        &nbsp;
        <input type="submit" value="Get Answer" />
      </MyForm>
      <Answer>Your Answer: {this.state.result}</Answer>
      <Buttons>
      <button onClick={this.handleExit}>Exit</button>
      &nbsp;
      <button onClick={this.handleLogs}>Get Log</button>
      </Buttons>
      </div>
    )
  }
}

export default Calculator