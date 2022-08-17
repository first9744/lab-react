import React from 'react';
import './App.css';
import WordCard from './WordCard';

const word = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function App() {
  return (
    <div>
      <WordCard value={word}/>
      <h4>Explanation : Arrange the English letters in the correct order.</h4>
    </div>
  );
}


export default App;