import { useRef } from 'react';
const Search = ({SetSearchitem , Searchitem}) =>{

    const Searchref = useRef();

    return(
        <form className="searchForm" onSubmit={(e)=> e.preventDefault()}>
            <input 
            autoFocus
            placeholder='seachitem'
            ref={Searchref}
            value={Searchitem}
            onChange={(e)=> SetSearchitem(e.target.value)}
            />
        </form>
    )
}

export default Search