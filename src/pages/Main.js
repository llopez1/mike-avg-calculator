import React from 'react';

const Main = () => {

    const [display, setDisplay] = React.useState(0);
    const [input1, setInput1] = React.useState(0);

   const handleClickNumbers = (num) => {
       let result = parseInt(display.toString() + num.toString()); 
       setDisplay(result); 
   }; 

   const clear = () =>{
       setDisplay(0); 
       setInput1(0);
   }

   
   const add = () =>{
       //save first input
        setInput1(display);
        setDisplay(0); 
   }

   const equal = () => {
       setDisplay(display + input1); 
       setInput1(0); 
   }

    return ( 
    <>
    <span style={{fontSize: 50}}>{display}</span> 
    <div>
    <span style={{fontSize: 20, color: 'green'}}>{input1}</span>
    </div>
     
    
    <div>
     <button onClick = {() => handleClickNumbers(1)}>1</button>
     <button onClick = {() => handleClickNumbers(2)}>2</button>
     <button onClick = {() => handleClickNumbers(3)}>3</button>
    </div>
   <div>
    <button onClick = {() => handleClickNumbers(4)}>4</button>
    <button onClick = {() => handleClickNumbers(5)}>5</button>
    <button onClick = {() => handleClickNumbers(6)}>6</button>
   </div>
    
    <div>
    <button onClick = {() => handleClickNumbers(7)}>7</button>
    <button onClick = {() => handleClickNumbers(8)}>8</button>
    <button onClick = {() => handleClickNumbers(9)}>9</button>
    </div>
    
    <div>
    <button onClick = {() => handleClickNumbers(0)}>0</button>
    <button onClick = {() => add()}>+</button>
    <button onClick = {() => equal()}>=</button>
    </div>

    <div>
        <button onClick = {() => clear()}>CLEAR</button>
    </div>
    
    </>
    )
};


export default Main; 