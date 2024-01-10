import './ListItems.css'

const ListItems = ({items , itemChange , itemDelete , lenght }) =>{   
      return (      
        <section className='sectiom01'>
             {items.length ? (
                <ul className='list-items'>
                    {items.map((item) =>(
                        <li className='item' key={item.id}>
                            <input 
                                type='checkbox'
                                onChange={() => itemChange(item.id)}
                                checked={item.checked} 
                            />
                            <label
                                onDoubleClick={() => itemChange(item.id)}
                            >{item.item}</label>
                            <button 
                                className='delBtn' 
                                onClick={() => itemDelete(item.id)}
                            >delete</button>
                        </li> 
                    ))}
                </ul>
             ) : (
                <p>your list is empty</p>
             )}
             <p style={{color: "blue", fontSize: "20px"}}>
                {lenght === 0 ? (
                    <p>{lenght} please add the Items</p>
                ) : (
                    <p> {lenght} list {lenght === 1 ? "Item" : "items"}</p> 
                )}
            </p>
        </section>
       
    )
}

export default ListItems