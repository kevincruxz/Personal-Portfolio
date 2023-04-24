import './aboutcard.css';

export const AboutCard = (props) => {
    const putParagraph = () => {
        if (props.paragraph === 1) {
            return ("Hello! My name is Kevin Cruz I am 20 years old and currently studying" +
                " a degree in Software Engineering at Coahuila's University of Technology in " +
                "Ramos Arizpe, Coahuila, Mexico");
        } else if (props.paragraph === 2) {
            return ("This project I made is a personal portfolio, for presenting myself to people/" + 
                "projects/companies that I am personally interested in participating or working in, " +
                "also for putting in practice my skills in web development and thus developing a better " +
                "version of myself 👀")
        } else {
            return ("I like to always be active and trying or learning new things day by day, that is why " + 
                "I always try to get out of my comfort zone and try to always aim for the highest even if I " +
                "fail, that is a nice sounding presentation of me but now let's get to the point and welcome to my personal " +
                "web portfolio.")
        }
    }

    return (
        <div className={props.side}>
            <div className='card'>
                {putParagraph()}
            </div>
        </div>
    );
}