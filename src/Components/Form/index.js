import { FormPiece } from '../FormPiece';
import { Waves } from '../Waves';
import './form.css';

export const Form = () => {
    return (
        <div className='form'>
            <form>
                <FormPiece tag='input' id='fname' type='text' desc='First Name'/>
                <FormPiece tag='input' id='lname' type='text' desc='Last Name'/>
                <FormPiece tag='input' id='email' type='email' desc='Email'/>
                <FormPiece id='message' desc='Message'/>
                
                <button>Submit</button>

                <img src='./img/formGif.gif'/>

            </form>
            <Waves />
        </div>
    );
}