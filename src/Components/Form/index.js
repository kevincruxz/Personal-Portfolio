import { FormPiece } from '../FormPiece';
import { Waves } from '../Waves';
import './form.css';

export const Form = () => {
    return (
        <div className='form'>
            <h1>Contact Me</h1>
            <form>
                <FormPiece tag='input' id='fname' type='text' desc='First Name' input='first-input'/>
                <FormPiece tag='input' id='lname' type='text' desc='Last Name' input='second-input'/>
                <FormPiece tag='input' id='email' type='email' desc='Email' input='third-input'/>
                <FormPiece id='message' desc='Message'/>
                
                <button><span>Submit</span></button>

            </form>
            <div className='astronaut'></div>
            <Waves />
        </div>
    );
}