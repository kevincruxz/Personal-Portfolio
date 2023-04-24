import './form-piece.css';

export const FormPiece = (props) => {
    const tag = () => { 
        if (props.tag === 'input') { 
            return <input id={props.id} type={props.type} className={props.input + ' inputs'}/> 
        } 
        return <textarea id='message' rows={15} className='mensaje'/>
    }
    return (
        <div className='form-piece'>
            <label for={props.id}>{props.desc}</label>
            {tag()}
        </div>
    );
}