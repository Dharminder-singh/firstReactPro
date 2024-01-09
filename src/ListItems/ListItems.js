
import { useState } from 'react';
import './ListItems.css'

const ListItems = () =>{

    const [items , setitems] = useState([
        {
            id : 1,
            checked : false,
            item : "item 1"
        },
        {
            id : 2,
            checked : false,
            item : "item 2"
        },
        {
            id : 3,
            checked : false,
            item : "item 3"
        }
    ]);

const itemChange = (id)=>{
    const listitems = items.map((item) => item.id === id ? {...item, checked: !item.checked}: item );
    setitems(listitems);
}
      return (
        <section className='sectiom01'>
            <ul className='list-items'>
                {items.map((item) =>(
                    <li className='item' key={item.id}>
                        <input 
                            type='checkbox'
                            onChange={() => itemChange(item.id)}
                            checked={item.checked} 
                        />
                            <label>{item.item}</label>
                            <button className='delBtn'>delete</button>
                        </li>
                ))}
            </ul>
        </section>
    )
}

export default ListItems