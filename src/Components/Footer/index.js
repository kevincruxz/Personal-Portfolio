import './footer.css';

export const Footer = () => {
    return (
        <div className='footer'>
            <div className='social-logos'>
                <div className='github-logo social-net'><a href='https://github.com/kevincruxz' target='blank'></a></div>
                <div className='linkedin-logo social-net'><a href='https://www.linkedin.com/in/kevincruxz/' target='blank'></a></div>
            </div>

            <p>© Kevin Cruz 2023</p>
        </div>
    );
}