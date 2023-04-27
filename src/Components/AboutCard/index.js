import './aboutcard.css';

export const AboutCard = (props) => {
    const putParagraph = () => {
        if (props.paragraph === 1) {
            return ("Hello! My name is Kevin Cruz I am 20 years old and currently studying" +
                " a degree in Software Engineering at Coahuila's University of Technology in " +
                "Ramos Arizpe, Coahuila, Mexico");
        } else if (props.paragraph === 2) {
            return ("This project I made is a personal portfolio, for presenting myself to people/" + 
                "projects/companies that I am personally interested in participating or working with " +
                "and that I believe I could add some value into, " +
                "also for putting in practice my skills in web development and thus developing a better " +
                "version of myself 👀")
        } else {
            return ("I like to always be active and trying or learning new things day by day, that gets me " + 
                "out of my comfort zone and is fun, (most of the times), I have more to tell but see it yourself " +
                "in the next pieces of React code I made for you all. Welcome to my personal " +
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