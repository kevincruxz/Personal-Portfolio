import { AbilityCard } from '../AbilityCard';
import './abilities.css';

export const Abilities = () => {
    return (
        <div className='abilities' id='abilities-section'>
            <h1>Skills</h1>
            <div className='skill-cards'>
                <AbilityCard name='HTML - CSS - Javascript' direction='left-direction' level={20} visibleLevel={2000} measureBar='first-bar' moveBarTo='right' logo='html-css-js'/>
                <AbilityCard name='React' direction='right-direction' level={30} visibleLevel={2200} measureBar='second-bar' moveBarTo='left' logo='react'/>
                <AbilityCard name='Ruby' direction='left-direction' level={55} visibleLevel={2400} measureBar='third-bar' moveBarTo='right' logo='ruby'/>
                <AbilityCard name='C#' direction='right-direction' level={75} visibleLevel={2600} measureBar='fourth-bar' moveBarTo='left' logo='cSharp'/>
            </div>
        </div>
    );
}