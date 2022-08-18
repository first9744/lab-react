import React from 'react';
import './App.css';
import WordCard from './WordCard';

var wordArray = ['"Watermelon', 'Orange','Banana','Apple','Coconut','Kiwi','Mango','Cherry','Peach','Avocado'];
var word = wordArray[Math.floor(Math.random()*wordArray.length)];

function refreshPage() {
  window.location.reload(false);
}
function App() {
  return (
    <div>
      <WordCard value={word}/>
      <h4>คำอธิบาย : เรียงคำศัพย์ดังต่อไปนี้ให้ถูกต้อง และหากต้องการเปลี่ยนคำศัพท์ ให้กดปุ่ม Change Next Word </h4>
      <h5>คำใบ้ : คำศัพท์เป็นชื่อของผลไม้ชนิดต่างๆ </h5>
      <h6>มีคำดังต่อไปนี้ แตงโม, ส้ม, กล้วย, แอปเปิ้ล, มะพร้าว, กีวี่, มะม่วง, เชอร์รี่ และอโวคาโด้</h6>
      <button
          type="button"
          className='button'
          onClick={refreshPage}
        >Change Next Word</button>
    </div>
  );
}
export default App;