import './aboutcard.css';

export const AboutCard = (props) => {
    return (
        <div className={props.side}>
            <div className='card'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id magna facilisis neque semper semper eget eu turpis. 
                    Quisque condimentum feugiat neque eu mollis. Cras et porttitor sapien, quis vulputate dui. 
                    Maecenas nec mauris tincidunt, pellentesque metus sed, lacinia diam. Nullam non tempus eros. 
                </p>
            </div>
        </div>
    );
}