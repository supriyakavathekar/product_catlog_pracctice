import './App.css';
import { Routes , Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductDetail from './pages/ProductDetail';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage'
import Header from './components/Header';



function App() {
  return (
    <>
    
    <div className="App">
     

     <Header/>
     <Routes>

     <Route index element ={<HomePage/>} />
     <Route path='/products' element={<HomePage/>}/>
     <Route path='/products/:id'  element={<ProductDetail/>} />
     <Route  path='/contact' element={<ContactPage/>} />
     <Route path='/*' element={<NotFoundPage/>} />

     </Routes>
     

    </div>

    
    
    </>
  );
}

export default App;
