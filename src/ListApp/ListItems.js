import ListItem from "./ListItem"
const ListItems = ({items , itemChange , itemDelete }) =>{
    return (
        <ul className='list-items'>
            {items.map((item) =>(
                <ListItem 
                key = {item.id}
                item={item}
                itemChange = {itemChange}
                itemDelete = {itemDelete}
                />
            ))}
        </ul>
        )
    }

export default ListItems