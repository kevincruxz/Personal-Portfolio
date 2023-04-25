import './frontpage.css'
import 'animate.css'
import Typed from 'typed.js'
import React from 'react';

const Frontpage = () => {
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Web Developer', 'Programmer', 'Student', 'Human', 'Taco', 'Handsome Guy'],
            typeSpeed: 100,
            backSpeed: 90,
            loop: true,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);

    return (
        <div className="frontpage">
            <div className='title'>
                <h1>Kevin Cruz</h1>
                <h1>A <span ref={el} /></h1>
            </div>
            <svg width="500" height="100" viewBox="0 0 500 100" preserveAspectRatio="none">
                <path d="M0,100 Q250,0 500,100 L500,100 Z" fill="white" />
            </svg>
        </div>
    );
}

export default Frontpage;