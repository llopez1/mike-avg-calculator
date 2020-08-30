import React from 'react';
import './App.css'

const Main = () => {

    const [display, setDisplay] = React.useState("");
    const [input1, setInput1] = React.useState("");
    const [operator, setOperator] = React.useState(""); // used this to store the value to store key word

   const handleClickNumbers = (num) => {

   
       
       if(operator) {
        let result = parseInt(input1.toString() + num.toString()); 
           setInput1(result); 
       } else {
        let result = parseInt(display.toString() + num.toString());  
        setDisplay(result); 
       }
       
   }; 

   const clear = () =>{
       setDisplay(""); 
       setInput1("");
       setOperator(""); 
   }

   
   const add = () =>{
     
        setOperator("+"); 
   }

   const divide = () => {

       setOperator("/") 
   }

   const multiply = () => {

       setOperator("*"); 
   }

   const subtract = () => {

        setOperator("-"); 
   }
   const equal = () => {
       
       if (operator == "+") {
        setDisplay(display + input1);
    
        }

       if (operator == "-") {
           setDisplay((display - input1) * -1); 
           
       } 

       if (operator == "/") {
           setDisplay(display / input1);
       }

       if (operator == "*") {
           setDisplay(display * input1);
       }

       setInput1(""); 
       setOperator(""); 

   }

    return ( 
    <>

    

<div className="app">
    <div className="input">   
        <div>
            <span style={{fontSize: 50, color: 'white'}}>{display}</span>
        </div>

        <div>
         <span style={{fontSize: 50, color: 'white'}}>{operator}</span>
        </div>
        
        <div>
            <span style={{fontSize: 50, color: 'white'}}>{input1}</span> 
        </div>
     
    </div>
    <div className="calc-wrapper">
        <div>
            <div className="row">
                <button className="button-wrapper" onClick = {() => handleClickNumbers(1)}>1</button>
                <button className="button-wrapper" onClick = {() => handleClickNumbers(2)}>2</button>
                <button className="button-wrapper" onClick = {() => handleClickNumbers(3)}>3</button>
                <button className="operator" onClick = {() => add()}>+</button>

            </div>
            <div className="row">
                <button className="button-wrapper" onClick = {() => handleClickNumbers(4)}>4</button>
                <button className="button-wrapper" onClick = {() => handleClickNumbers(5)}>5</button>
                <button className="button-wrapper" onClick = {() => handleClickNumbers(6)}>6</button>
                <button className="operator" onClick = {() => subtract()}>-</button>

            </div>
            <div className="row">
                <button className="button-wrapper" onClick = {() => handleClickNumbers(7)}>7</button>
                <button className="button-wrapper" onClick = {() => handleClickNumbers(8)}>8</button>
                <button className="button-wrapper" onClick = {() => handleClickNumbers(9)}>9</button>
                <button className="operator" onClick = {() => divide()}>/</button>
            </div>
            <div className="row">
                <button className="button-wrapper" onClick = {() => handleClickNumbers(0)}>0</button>
                <button className="operator" onClick = {() => multiply()}>*</button>
    
            </div>
            <div className="row">
                <button className="button-wrapper" onClick = {() => clear()}>CLEAR</button>
                <button className="operator" onClick = {() => equal()}>=</button>
            </div>



        </div>
    </div>
</div>
     
    
    

    





    
    </>
    )
};


export default Main; 