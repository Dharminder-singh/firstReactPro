import './additems.css';
import { useRef } from 'react';

const AddItems = ({newItem , itemNewAdd , setNewItems}) =>{

    const inputRef = useRef();

    
    
    return(
        <form className='additemForm' onSubmit={itemNewAdd}>
            <label htmlFor='additem' className='hide'>additem</label>
            <input 
                id='additem'
                type='text'
                autoFocus
                ref={inputRef}
                placeholder='Add New Items'
                required
                value={newItem}
                onChange={(e) => setNewItems(e.target.value)}
            />
            <button 
                type='submmit'
                onClick={() => inputRef.current.focus()}
            >
                Add
            </button>
        </form>
        
    )
}

export default AddItems