import { FormPiece } from '../FormPiece';
import { Waves } from '../Waves';
import './form.css';
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import 'animate.css';

export const Form = () => {

    const [state, handleSubmit] = useForm("xpzekbya");
    if (state.succeeded) {
        let stateViewer = document.querySelector('.formState');
        stateViewer.classList.add('success');

        clearForm();

        setTimeout(() => {
            stateViewer.classList.remove('success');
        }, 3000)
    }

    function clearForm() {
        const inputs = document.querySelectorAll('.boxes');
        inputs.forEach((box) => {
            box.value = '';
        });
    }

    return (
        <div className='form' id='contact-section'>
            <h1>Contact Me </h1>
            <form onSubmit={handleSubmit}>
                <FormPiece tag='input' id='fname' type='text' desc='First Name' input='first-input'/>
                <ValidationError prefix="Fname" field="fname" errors={state.errors} />

                <FormPiece tag='input' id='lname' type='text' desc='Last Name' input='second-input'/>
                <ValidationError prefix="Lname" field="lname" errors={state.errors} />

                <FormPiece tag='input' id='email' type='email' desc='Email' input='third-input'/>
                <ValidationError prefix="Email" field="email" errors={state.errors} />

                <FormPiece id='message' desc='Message'/>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
                
                <button disabled={state.submitting}><span>Submit</span></button>

            </form>
            <div className='formState'>Thank You!</div>
            <div className='astronaut'></div>
            <Waves />
        </div>
    );
}