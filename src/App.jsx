import { ScrollTrigger,SplitText } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger, SplitText);
import gsap from 'gsap';
import './index.css';
import React from 'react';    

const App = () => {
  return (
    <div className='flex-center h-[100vh]' >
      <h1 className='text-7xl text-indigo-300'>Hellooo Guyzzz</h1>
    </div>
  )
}

export default App