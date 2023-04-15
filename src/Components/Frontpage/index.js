import './frontpage.css'
import 'animate.css'

const Frontpage = () => {
    return (
        <div className="frontpage">
            <h1 className='animate__animated animate__backInDown'>Que pedo loco.</h1>
            <svg width="500" height="100" viewBox="0 0 500 100" preserveAspectRatio="none">
                <path d="M0,100 Q250,0 500,100 L500,100 Z" fill="white" />
            </svg>
        </div>
    );
}

export default Frontpage;