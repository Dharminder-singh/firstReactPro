import './App.css';
import Header from './Header/header';
import Main from './Main/Main';
import Footer from './footer/Footer'
import ListItems from './ListItems/ListItems';
import './custom.css';
import { useState } from 'react';

function App() {
  
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
localStorage.setItem('mylist' , JSON.stringify(listitems));
}
const itemDelete = (id)=>{
const listitems = items.filter((item) => item.id !== id)
setitems(listitems)
localStorage.setItem('mylist' , JSON.stringify(listitems));
}

  return (
    <div className="App">
      <Header 
      title="My List"
      />
      <Main />
      <ListItems 
      items = {items}
      itemChange = {itemChange}
      itemDelete = {itemDelete}
      lenght = {items.length}
      />
      <Footer 
        
      />
    </div>
  );
}

export default App;
