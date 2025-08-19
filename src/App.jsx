import { ScrollTrigger,SplitText } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger, SplitText);
import gsap from 'gsap';
import './index.css';
import Navbar from './components/navbar';
import Hero from './components/Hero';
import React from 'react';    

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className='h-dvh bg-black'/>
    </main>
  )
}

export default App