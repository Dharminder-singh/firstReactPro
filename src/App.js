import './App.css';
import Header from './Header/header';
import Main from './Main/Main';
import Footer from './footer/Footer'
import MainApp from './ListApp/MainApp';
import './custom.css';
import { useState, useEffect } from 'react';
import AddItems from './AddItems/AddItems'
import Search from './Search/Search'
import ApiRequest from './Api_request/ApiRequest'

function App() {  
  const API_URL = ("http://localhost:3500/items/")
  const [items , setitems] = useState([])
  const [newItem , setNewItems] = useState('')
  const [Searchitem, SetSearchitem] = useState('')
  const[fetcherror, setfetcherror] = useState('')
  useEffect(()=>{
      const fetchItems = async () =>{
        try{
          const respones = await fetch(API_URL)
          const listitems = await respones.json()
          setitems(listitems)
          setfetcherror(null)
        }catch (err){
          setfetcherror(err.message);
        }finally{
          return false;
        }
      }
      (async ()=> await fetchItems())();
  },[])

  const additem = async (item) =>{
    const id = items.length ? (Number(items[items.length - 1].id) + 1).toString() : "1";
    const myNewItem = {id , checked : false , item} ;
    const listitems = [...items, myNewItem]
    setitems(listitems);
    const postOption = {
      method : 'POST',
      Header : {
        "Content-type" : "application/json"
      },
      body : JSON.stringify(myNewItem)
    }
    const result = await ApiRequest(API_URL , postOption)
    if(result) setfetcherror(result)
  }

  const itemChange = async (id)=>{
    const listitems = items.map((item) => item.id === id ? {...item, checked: !item.checked}: item );
    setitems(listitems);
    const checkedItem = listitems.filter((item) => item.id === id);
    const updateOption = {
      method : 'PATCH',
      Header : {
        "Content-type" : "application/json"
      },
      body : JSON.stringify({checked : checkedItem[0].checked})
    }
    const result = await ApiRequest(`${API_URL}${id}` , updateOption)
    if(result) setfetcherror(result)
  }

  const itemDelete = async (id)=>{
    const listitems = items.filter((item) => item.id !== id)
    setitems(listitems);
    const delOption = {method : 'DELETE'}
    const result = await ApiRequest(`${API_URL}${id}`, delOption)
    if(result) setfetcherror(result)
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
      <Search 
        Searchitem = {Searchitem}
        SetSearchitem = {SetSearchitem}
      />
      {fetcherror && <p>{"Data Not Found"}</p>}
      <MainApp 
        items = {items.filter(item =>((item.item).toLowerCase()).includes(Searchitem.toLowerCase()))}
        itemChange = {itemChange}
        itemDelete = {itemDelete}
        lenght = {items.length}
      />
      <AddItems 
        newItem = {newItem}
        setNewItems = {setNewItems}
        itemNewAdd = {itemNewAdd}
      />
      <Footer />
    </div>
  );
}

export default App;
