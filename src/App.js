import React from 'react';
import './App.css';
import WordCard from './WordCard';

var wordArray = ['watermelon', 'orange','banana','Apple','coconut','kiwi','mango','cherry','peach','avocado'];
var word = wordArray[Math.floor(Math.random()*wordArray.length)];

function refreshPage() {
  window.location.reload(false);
}
function App() {
  return (
    <div>
      <WordCard value={word}/>
      <button
          type="button"
          className='button'
          onClick={refreshPage}
        >Change Next Word</button>
    </div>
  );
}
export default App;