import { AbilityCard } from '../AbilityCard';
import './abilities.css';

export const Abilities = () => {
    return (
        <div className='abilities' id='abilities-section'>
            <h1>Skills</h1>
            <div className='skill-cards'>
                <AbilityCard name='HTML - CSS - Javascript' direction='left-direction' level={20} visibleLevel={2050} measureBar='first-bar' moveBarTo='right' logo='html-css-js'/>
                <AbilityCard name='React' direction='right-direction' level={30} visibleLevel={2300} measureBar='second-bar' moveBarTo='left' logo='react'/>
                <AbilityCard name='Other Programming Languages' direction='left-direction' level={35} visibleLevel={2550} measureBar='third-bar' moveBarTo='right' logo='programming'/>
                <AbilityCard name='Soft Skills' direction='right-direction' level={75} visibleLevel={2900} measureBar='fourth-bar' moveBarTo='left' logo='soft-skills'/>
            </div>
        </div>
    );
}