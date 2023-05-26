import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './pages/Main';
import Products from './pages/Products'
import Bookmark from './pages/Bookmark';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/products/list' element={<Products/>}/>
        <Route path='/bookmark' element = {<Bookmark/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>    
  );
}

export default App;
