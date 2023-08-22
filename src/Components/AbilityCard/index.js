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
            return 'Advanced level, I started learning the three basic web development tools 2 years ago with a web dev course and since then I have practiced and improved them with projects of more advenced complexity';
        } else if (props.name === 'React') {
            return 'Medium-beginner level in the domain of React, currently in the process of improving it developing new projects, being this portfolio the first one';
        } else if (props.name === 'Other Programming Languages') {
            return 'I domain programming languages like C# (advanced), Ruby (Medium), Java (Medium) and Python (Beginner). I have experience using OOP (classes, objects, etc.)';
            //Advanced level, the first language I learned back in Mechatronics Engineering, I domain
        } else if (props.name === 'Soft Skills') {
            return 'I am a proactive and responsible person who doesn\'t like to let down or dissapoint others, also I can communicate effectively and I enjoy the problem solving process';
        } else {
            return 'Can create backend systems using PHP, MySQL. Currently learning Express and MongoDB';
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