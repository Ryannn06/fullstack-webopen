import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

function App() {
  const [ counter, setCounter ] = useState(0);
  const [ clicks, setClicks ] = useState({
    left: 0, right: 0
  });

  const leftClick = () => {
    setClicks({
      ...clicks,
      left: clicks.left + 1
    });
  }

  const rightClick = () => {
    const newclicks = {
      ...clicks,
      right: clicks.right + 1
    }
    setClicks(newclicks);
  }

  return (
    <>
      <h1>{clicks.left} {clicks.right}</h1>
      <Button onClick={leftClick} text="left" />
      <Button onClick={rightClick} text="right" />

      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}> 
        plus
      </button>
    </>
  )
}

export default App
