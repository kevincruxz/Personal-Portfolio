import './form-piece.css';

export const FormPiece = (props) => {
    const tag = () => { 
        if (props.tag === 'input') { 
            return <input id={props.id} type={props.type} /> 
        } 
        return <textarea id='message' cols={28} rows={8}/>
    }
    return (
        <div className='form-piece'>
            <label for={props.id}>{props.desc}</label>
            {tag()}
        </div>
    );
}