import './abilityCard.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
            return 'Advanced level, 3 years of experience using them, I started with a web dev course and since then I have practiced and improved my abilities with projects of more advenced complexity';
        } else if (props.name === 'Javascript Frameworks (React, NextJS, Express)') {
            return 'Medium level, I have experience using React and NextJS for frontend development, and I am currently learning Express for backend development. I have experience using hooks, context, and I have created a few projects using these frameworks. I have also used Material UI and Bootstrap for styling and responsiveness.';
        } else if (props.name === 'Programming Languages / Algorithms') {
            return 'I domain programming languages like C# (advanced), Ruby (Medium), Java (Medium) and Python (Medium). I have experience using algorithms and data structures, I have created a few projects using these languages and I have experience using OOP and functional programming.';
        } else if (props.name === 'Backend (PHP, SQL, MongoDB)') {
            return 'I can create backend systems using PHP and SQL, also I have experience using MongoDB for NoSQL databases. I have created a few projects using these technologies and I have experience using APIs and CRUD operations.';
        } else if (props.name === 'Frontend / Web Design') {
            return 'I have experience desgning and creating unique web designs, I can use CSS Frameworks like Bootstrap or Tailwind, also I can use external tools like Canva and Photoshop for designing and prototyping web pages';
        } else {
            //Soft Skills
            return 'I am a proactive and responsible person, I can communicate effectively and I enjoy the problem solving process';
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