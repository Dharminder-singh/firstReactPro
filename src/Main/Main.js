import './MainStyle.css';
import { useState } from 'react';

const Main = () =>{
    const [count , setcount] = useState(0)
    const [name , setname] = useState('Developer');
    const namechnage = () =>{
        const name = ["Developer", "Coder" ]
        const int = Math.floor(Math.random() * 2);
        setname(name[int])
        return name[int]
        
      }
      
      const clickButton4 = () =>{
       setcount(count + 1);
      }
      return (
        <main className='main'>
            <h2>Hello {name}!</h2>
            <button className='btn' onClick={namechnage}>chnage the name</button>
            <p>{count}</p>
            <button className='btn' onClick={clickButton4}>click it</button>
        </main>
    )
}

export default Main