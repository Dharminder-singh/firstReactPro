
import './MainApp.css'
import ListItems from './ListItems'

const MainApp = ({items , itemChange , itemDelete , lenght }) =>{   
      return (      
        <section className='sectiom01'>
             {items.length ? (
                <ListItems 
                items={items}
                itemChange = {itemChange}
                itemDelete = {itemDelete}
                />
             ) : (
                <p style={{color: "blue", fontSize: "20px"}}>
                {lenght === 0 ? (
                    <span>{lenght} please add the Items</span>
                ) : ("")}
            </p>
             )}
             
             <p style={{color: "blue", fontSize: "20px"}}>
                {lenght === 0 ? ("") : (
                    <span> {lenght} list {lenght === 1 ? "Item" : "items"}</span> 
                )}
            </p>
            
        </section>
       
    )
}

export default MainApp