import './ProjectSquare.css';
import { useState } from 'react';

export const ProjectSquare = (props) => {
    /*const [desc, deployDesc] = useState(0)

    const squares = document.querySelectorAll('.project-square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', (e) => {
            deployDesc(() => {
                let description = square.lastChild;
                description.innerHTML = 'dwsda'
            });
            
        }, false);
        square.addEventListener('mouseout', (e) => {
            
        }, false);
    }); */

    const isWedding = () => {
        if (props.project !== 'wedding') {
            return <a href={props.link} target='blank' />
        }
    }

    return (
        <div className={props.project + " project-square"}>
            {isWedding()}
            <h2>{props.name}</h2>
            <h3 className={props.project + '-description'}>{props.subtitle}</h3>
        </div>
    );
}