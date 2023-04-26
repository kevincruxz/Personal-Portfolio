import './form-piece.css';

export const FormPiece = (props) => {
    const tag = () => { 
        if (props.tag === 'input') { 
            return <input id={props.id} type={props.type} className={props.input + ' inputs boxes'} name={props.id}/> 
        } 
        return <textarea id='message' name='message' rows={10} className='mensaje boxes'/>
    }
    return (
        <div className='form-piece'>
            <label htmlFor={props.id}>{props.desc}</label>
            {tag()}
        </div>
    );
}