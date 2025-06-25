import React, { useState } from 'react'
import './App.css'

const dict: { [key: string]: number } = {
  'a': 1,
  'b': 2,
  'c': 3,
  'd': 4,
  'e': 5,
  'f': 6,
  'g': 7,
  'h': 8,
  'i': 9,
  'j': 1,
  'k': 2,
  'l': 3,
  'm': 4,
  'n': 5,
  'o': 6,
  'p': 7,
  'q': 8,
  'r': 9,
  's': 1,
  't': 2,
  'u': 3,
  'v': 4,
  'w': 5,
  'x': 6,
  'y': 7,
  'z': 8,
}


function App() {
  const [inputValue, setInputValue] = useState('')
  const [outputValue, setOutputValue] = useState('')

  function calcNumber(str: string) {
    let sum = 0
    const sanitizedStr = str.replaceAll(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g, '').replaceAll(' ', '').toLowerCase();

    for (let char of sanitizedStr) {
      if (!isNaN(+char)) {
        sum += +char
      } else {
        sum += dict[char] || 0;
      }
    }

    let len = sum.toString().length;
    while (len > 1) {
      const split = Math.floor(sum / 10);
      const remaining = Math.floor(sum % 10);
      console.log(split, remaining);
      sum = split + remaining;
      len = sum.toString().length;
    }

    setOutputValue(sum.toString());
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInputValue(value)

    calcNumber(value);
  }

  return (
    <div className="app">
      <h2>Number Calculator</h2>


      <div className="input-section">
        <label htmlFor="numberInput">
          Type below
          <input
            id="numberInput"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter here"
            className="number-input"
          />
        </label>
      </div>

      <div className="output-section">
        <div className="output-value">
          <h2>{outputValue || '0'}</h2>
        </div>
      </div>
    </div>
  )
}

export default App
