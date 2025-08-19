import React from 'react'
import { navLinks } from '../../constants/index.js'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const navbar = () => {
    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger:{
                trigger : 'nav',
                start: 'bottom top'
            }
        });
        navTween.fromTo('nav',{backroundcolour: 'transparent'}, {
            backgroundColor:'#00000050',
            backroundFilter: 'blur(10px)',
            duration: 1,
            ease : 'power1.inOut'
        });
    })
  return (
    <nav>
        <div>
            <a className='flex items-center gap-2'>
                <img src='/images/logo.png' alt='logo'></img>
                <p>velvet pour</p>
            </a>
            <ul>
                {navLinks.map((link)=> (
                    <li key={link.id}>
                        <a href={'#${link.id}'}>{link.title}</a>

                    </li>

                ))}
            </ul>
        </div>
    </nav>
  )
}

export default navbar