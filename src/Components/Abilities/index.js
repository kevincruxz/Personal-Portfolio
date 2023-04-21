import { AbilityCard } from '../AbilityCard';
import './abilities.css';

export const Abilities = () => {
    return (
        <div className='abilities'>
            <AbilityCard direction='left-direction'/>
            <AbilityCard direction='right-direction'/>
            <AbilityCard direction='left-direction'/>
            <AbilityCard direction='right-direction'/>
        </div>
    );
}