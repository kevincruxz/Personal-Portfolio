import './ProjectSquare.css';

export const ProjectSquare = (props) => {
   /* const squares = document.querySelectorAll('.project-square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', (e) => {
            square.setAttribute('style', 'transform: scale(1.5);')
        }, false);
        square.addEventListener('mouseout', (e) => {
            square.setAttribute('style', '')
        }, false);
    }); */

    return (
        <div className={props.project + " project-square"}>
            <h2>{props.name}</h2>
            <h3>{props.subtitle}</h3>
        </div>
    );
}