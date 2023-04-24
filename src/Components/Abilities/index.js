import { AbilityCard } from '../AbilityCard';
import './abilities.css';

export const Abilities = () => {
    return (
        <div className='abilities'>
            <h1>Skills</h1>
            <div className='skill-cards'>
                <AbilityCard direction='left-direction' level={20} visibleLevel={2000} measureBar='first-bar' moveBarTo='right' logo='html-css-js'/>
                <AbilityCard direction='right-direction' level={30} visibleLevel={2200} measureBar='second-bar' moveBarTo='left' logo='react'/>
                <AbilityCard direction='left-direction' level={55} visibleLevel={2400} measureBar='third-bar' moveBarTo='right' logo='ruby'/>
                <AbilityCard direction='right-direction' level={30} visibleLevel={2600} measureBar='fourth-bar' moveBarTo='left'/>
            </div>
        </div>
    );
}