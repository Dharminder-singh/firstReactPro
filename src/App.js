import './App.css';
import Header from './Header/header';
import Main from './Main/Main';
import Footer from './footer/Footer'
import ListItems from './ListItems/ListItems';
import './custom.css';

function App() {
  
  return (
    <div className="App">
      <Header />
      <Main />
      <ListItems />
      <Footer />
    </div>
  );
}

export default App;
