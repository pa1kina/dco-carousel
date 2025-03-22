import "./App.css";
import { useState } from 'react';
import { Carousel } from './Carousel';
import IMAGES from "./data/constants.js";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h3>palina's attempt at a react carousel</h3>
       <Carousel data={IMAGES}/>
    </>
  )
}

export default App
