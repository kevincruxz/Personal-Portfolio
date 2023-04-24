import { useState } from 'react';
import './abilityCard.css';

export const AbilityCard = (props) => {

    document.addEventListener('scroll', (e) => {

        let bar = document.querySelector('.' + props.measureBar);

        const barAnimation = (bar, props) => {
            let bounceBasis = (props.direction === 'left-direction') ? -7 : 7;
            bar.style.cssText = 'background-position: ' + (props.level + bounceBasis) + '%;';
            setTimeout(() => {
                bar.style.cssText = 'background-position: ' + props.level + '%;';
            }, 600);
        }

        if (window.scrollY >= props.visibleLevel && bar.style.cssText !== 'background-position: ' + props.level + '% center;') {
            barAnimation(bar, props);
        } else if (window.scrollY < props.visibleLevel) {
            //remove animation
            bar.style.cssText = 'background-position: ' + props.moveBarTo + ';';
        } 
    });

    return (
        <div className='abilityCard'>
            <div className={props.direction}>
                <div className='branding'><div className={props.logo + ' logos'}></div></div>
                <div className={props.measureBar + ' measure'}></div>
            </div>
        </div>
    );
}