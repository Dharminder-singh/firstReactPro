import './App.css';
import Header from './Header/header';
import Main from './Main/Main';
import Footer from './footer/Footer'
import MainApp from './ListApp/MainApp';
import './custom.css';
import { useState } from 'react';
import AddItems from './AddItems/AddItems'

function App() {
  
  

  const [items , setitems] = useState(JSON.parse(localStorage.getItem('mylist')));

const [newItem , setNewItems] = useState('')

  const saveAndsetItmes = (myItemList) =>{
    setitems(myItemList);
    localStorage.setItem('mylist' , JSON.stringify(myItemList));
  }

  const additem = (item) =>{
    const id = items.length ? items[items.length - 1].id + 1 : 1;

    const myNewItem = {id , checked : false , item} ;
    const listitems = [...items, myNewItem]
    saveAndsetItmes(listitems);
  }

const itemChange = (id)=>{
const listitems = items.map((item) => item.id === id ? {...item, checked: !item.checked}: item );
saveAndsetItmes(listitems);
}
const itemDelete = (id)=>{
const listitems = items.filter((item) => item.id !== id)
saveAndsetItmes(listitems);
}

const itemNewAdd = (e)=> {
  e.preventDefault();
  if (!newItem) return;
  additem(newItem);
  setNewItems('')
 
}

  return (
    <div className="App">
      <Header 
        title="My List"
      />
      <Main />
      <MainApp 
        items = {items}
        itemChange = {itemChange}
        itemDelete = {itemDelete}
        lenght = {items.length}
      />
      <AddItems 
        newItem = {newItem}
        setNewItems = {setNewItems}
        itemNewAdd = {itemNewAdd}
      />
      <Footer 
        
      />
    </div>
  );
}

export default App;
