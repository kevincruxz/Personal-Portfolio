import { AbilityCard } from '../AbilityCard';
import './abilities.css';

export const Abilities = () => {
    return (
        <div className='abilities'>
            <AbilityCard direction='left-direction' level={20} visibleLevel={2000} measureBar='first-bar' moveBarTo='right'/>
            <AbilityCard direction='right-direction' level={60} visibleLevel={2200} measureBar='second-bar' moveBarTo='left'/>
            <AbilityCard direction='left-direction' level={55} visibleLevel={2400} measureBar='third-bar' moveBarTo='right'/>
            <AbilityCard direction='right-direction' level={30} visibleLevel={2600} measureBar='fourth-bar' moveBarTo='left'/>
        </div>
    );
}