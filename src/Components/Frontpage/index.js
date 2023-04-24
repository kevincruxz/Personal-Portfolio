import './frontpage.css'
import 'animate.css'

const Frontpage = () => {
    return (
        <div className="frontpage">
            <div className='title'>
                <h1>Kevin Cruz</h1>
                <h1>A Web Developer</h1>
            </div>
            <svg width="500" height="100" viewBox="0 0 500 100" preserveAspectRatio="none">
                <path d="M0,100 Q250,0 500,100 L500,100 Z" fill="white" />
            </svg>
        </div>
    );
}

export default Frontpage;