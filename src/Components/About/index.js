import { Navbar } from '../Navbar';
import { AboutCard } from '../AboutCard';
import './about.css';

export const About = () => {
    return (
        <div className='about-section'>
            <Navbar />

            <div className='first-p right-cards'>
                <AboutCard side='right'/>
            </div>

        </div>
    );
}