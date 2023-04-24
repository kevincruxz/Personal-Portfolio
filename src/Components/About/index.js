import { Navbar } from '../Navbar';
import { AboutCard } from '../AboutCard';
import './about.css';
import { useState } from 'react';

export const About = () => {
    const [yPosition, animate] = useState(0);

    document.addEventListener('scroll', (e) => {
        if (window.scrollY >= 150) {
            animate(document.querySelector('.first-p').classList.add('animate__backInDown'));
        }
    });

    return (
        <div className='about-section'>
            <Navbar />

            <div className='typing-animation'>
                
            </div>

            <div className='first-p cards animate__animated'>
                <AboutCard side='left' paragraph={1}/>
            </div>

            <div className='arrow'></div>
            
            <div className='second-p cards animate__animated'>
                <AboutCard side='right' paragraph={2}/>
            </div>
            <div className='third-p cards animate__animated'>
                <AboutCard side='left' paragraph={3}/>
            </div>
        
        </div>
    );
}