
const ListItem = ({item , itemChange , itemDelete}) =>{
    return (
        <li className='item'>
            <input 
                type='checkbox'
                onChange={() => itemChange(item.id)}
                checked={item.checked} 
            />
            <label
                onDoubleClick={() => itemChange(item.id)}
            ><span>{item.item}</span></label>
            <button 
                className='delBtn' 
                onClick={() => itemDelete(item.id)}
            >delete</button>
        </li> 
        )
    }
export default ListItem