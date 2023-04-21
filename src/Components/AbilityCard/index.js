import { useState } from 'react';
import './abilityCard.css';

export const AbilityCard = (props) => {
    const [yPosition, displayBar] = useState(0);

    document.addEventListener('scroll', (e) => {
        console.log(window.scrollY)
        if (window.scrollY >= 2300) {
            displayBar(() => {
                const bar = document.querySelector('.measure');
                bar.style.cssText = 'background-position: 10%;';
            });
        }
    });

    return (
        <div className='abilityCard'>
            <div className={props.direction}>
                <div className='branding'></div>
                <div className='measure'></div>
            </div>
        </div>
    );
}