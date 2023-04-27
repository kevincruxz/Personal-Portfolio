import { Navbar } from '../Navbar';
import { AboutCard } from '../AboutCard';
import './about.css';
import { useState } from 'react';
import 'animate.css';

export const About = () => {

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

            <div className='arrow-two'></div>

            <div className='third-p cards animate__animated'>
                <AboutCard side='left' paragraph={3}/>
            </div>
        
            <div className='ricardo-milos'></div>

        </div>
    );
}