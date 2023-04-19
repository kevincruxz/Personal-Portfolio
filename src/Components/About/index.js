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
                <AboutCard side='left'/>
            </div>

            <iframe src="https://giphy.com/embed/kyA60hKb6OgD564g8M" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
            
            <div className='second-p cards animate__animated'>
                <AboutCard side='right'/>
            </div>
            <div className='third-p cards animate__animated'>
                <AboutCard side='left'/>
            </div>
        
            <svg width="500" height="100" viewBox="0 0 500 100" preserveAspectRatio="none">
                <path d="M0,100 Q250,40 500,100 L500,100 Z" fill="black" />
            </svg>
        </div>
    );
}