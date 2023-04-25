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

    const writeDescription = () => {
        if (props.name === 'HTML - CSS - Javascript') {
            return 'Advanced domain in the use of these three technologies';
        } else if (props.name === 'React') {
            return 'Medium-beginner level in the domain of React, currently in the process of learning it developing projects like this portfolio';
        } else if (props.name === 'Ruby') {
            return 'Medium level of domain, I have developed a variety of projects using Ruby and a bit of Ruby on Rails';
        } else {
            return 'Advanced level, the first language I learned back in Mechatronics Engineering, I domain the OOP topic (classes, objects, etc.), and other programming topics';
        }
    }

    return (
        <div className='abilityCard'>
            <div className={props.direction}>
                <h2 className='skill-title'>{props.name}</h2>
                <div className='branding'><div className={props.logo + ' logos'}></div></div>
                <div className={props.measureBar + ' measure'}></div>
                <p className='skill-description'>{writeDescription()}</p>
            </div>
        </div>
    );
}