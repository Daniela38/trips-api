import './App.css';
import NavBar from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './components/context/AppContext';
import CartContainer from './components/Cart/CartContainer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register';
import Footer from './components/Footer/Footer';

function App() {
  return (

    <div className="App">
      <AppProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/categories/:categoryUrl' element={<ItemListContainer/>}/>
          <Route path='/categories/:categoryUrl/:id' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<CartContainer/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
      </AppProvider>
    </div>
  );
}

export default App;
