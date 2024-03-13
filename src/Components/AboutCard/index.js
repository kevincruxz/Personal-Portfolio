import './aboutcard.css';

export const AboutCard = (props) => {
    const putParagraph = () => {
        if (props.paragraph === 1) {
            return ("Hello! My name is Kevin Cruz I am 21 years old and I am currently studying" +
                " a degree in Software Engineering at Coahuila's University of Technology in " +
                "Ramos Arizpe, Coahuila, Mexico");
        } else if (props.paragraph === 2) {
            return ("This project I made is a personal portfolio, for presenting myself to people/" + 
                "projects/companies that I am personally interested in participating or working with " +
                "and that I believe I could add some value into, " +
                "also for putting in practice my skills in web development and thus developing a better " +
                "version of myself 👀")
        } else {
            return ("I like to always be active and trying or learning new things day by day, " + 
                "hoping to get some fun and get out of my comfort zone, I have more to tell but let's see the code.")
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