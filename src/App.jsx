import "./App.css"
import { useState } from "react";

function App() {

  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [method, setMethod] = useState('');
  const [sum, setSum] = useState('0');

  const buttons = [
    {text:"/",click:()=>{setMethod('/')}},
    {text:"9",click:()=>{set('9')}},
    {text:"8",click:()=>{set('8')}},
    {text:"7",click:()=>{set('7')}},
    {text:"*",click:()=>{setMethod('*')}},
    {text:"6",click:()=>{set('6')}},
    {text:"5",click:()=>{set('5')}},
    {text:"4",click:()=>{set('4')}},
    {text:"-",click:()=>{setMethod('-')}},
    {text:"3",click:()=>{set('3')}},
    {text:"2",click:()=>{set('2')}},
    {text:"1",click:()=>{set('1')}},
    {text:"+",click:()=>{setMethod('+')}},
    {text:"=",click:()=>{check()}},
    {text:".",click:()=>{set('.')}},
    {text:"0",click:()=>{set('0')}},
  ]

  const set = (_num) => {
    setSum('');
    if(method == ''){
      setX(x + _num);
    }else{
      setY(y + _num);
    }
  }

  const clear = () => {
    setX('');
    setY('');
    setMethod('')
  }

  const check = () => {

    switch (method) {

      case '+':
        setSum(Number(x) + Number(y));
        break;

      case '-':
        setSum(Number(x) - Number(y));
        break;

      case '*':
        setSum(Number(x) * Number(y));
        break;

      case '/':
        setSum(Number(x) / Number(y));
        break;

      default:
        setSum(0);
        break;
    }

    clear();

  }
  
  return (
    <main className="container">
      <section>
        <p>{x}{method}{y}{sum}</p>
      </section>
      <section className="buttons">
        {buttons.map((b) => {
          return (
            <button onClick={b.click}>{b.text}</button>
          )
        })}
      </section>
    </main>
  )

}

export default App;
