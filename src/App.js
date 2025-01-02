// import logo from './logo.svg';
// import './App.css';
import { useState } from 'react';

function MyButton({ onClick, num }) {
  return (
    <button style={{ color: 'blue', fontSize: '20px', padding: '15px 32px' }} onClick={onClick}> {num} </button>
  );
}

export default function App() {
  const [num, setNum] = useState(0);

  function handleClick() {
    setNum(num + 1)
  }

  return (
    <div>
      <MyButton onClick={handleClick} num={num}></MyButton>
    </div>
  );
}
