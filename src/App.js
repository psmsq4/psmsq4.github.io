// import logo from './logo.svg';
// import './App.css';
import { useState } from 'react';

function MyButton({ onClick, num }) {
  return (
    <button onClick={onClick}> {num} </button>
  );
}

export default function App() {
  const [num, setNum] = useState(0);

  return (
    <MyButton onClick={() => setNum(num++)}></MyButton>
  );
}
