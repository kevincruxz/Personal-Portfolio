import { AbilityCard } from '../AbilityCard';
import './abilities.css';
import divisor from './divisor.png';

export const Abilities = () => {
    return (
        <div className='abilities' id='abilities-section'>
            <h1>Skills</h1>
            <div className='skill-cards'>
                <AbilityCard name='HTML - CSS - Javascript' direction='left-direction' level={20} visibleLevel={2300} measureBar='first-bar' moveBarTo='right' logo='html-css-js'/>
                <AbilityCard name='Javascript Frameworks (React, NextJS, Express)' direction='right-direction' level={30} visibleLevel={2600} measureBar='second-bar' moveBarTo='left' logo='react'/>
                <AbilityCard name='Frontend / Web Design' direction='left-direction' level={80} visibleLevel={2900} measureBar='third-bar' moveBarTo='right' logo='frontend' />
                <AbilityCard name='Backend (PHP, SQL, MongoDB)' direction='right-direction' level={40} visibleLevel={3200} measureBar='fourth-bar' moveBarTo='left' logo='backend' />
                <AbilityCard name='Programming Languages / Algorithms' direction='left-direction' level={35} visibleLevel={3500} measureBar='fifth-bar' moveBarTo='right' logo='programming'/>
                <AbilityCard name='Soft Skills' direction='right-direction' level={75} visibleLevel={3700} measureBar='sixth-bar' moveBarTo='left' logo='soft-skills'/>
            </div>

            <img src={divisor} alt="Divisor" className='divisor' />
        </div>
    );
}