import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Signup from './components/Signup';
import Getproducts from './components/Getproducts';
import Addproducts from './components/Addproducts';
import Mpesapayments from './components/Mpesapayments';
import Signin from './components/Signin';


function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <h1 classname="text-success">Sokogarden-Buy and Sell online</h1>
      </header>

      <nav id='nav'className='m-4'>
        <Link className='btn bg-dark m-3 text-white link'to='/'>Getproducts</Link>
        <Link className='btn bg-dark m-3 text-white link'to='/signup'>Signup</Link>
        <Link className='btn bg-dark m-3 text-white link'to='/signin'>Signin</Link>
        <Link className='btn bg-dark m-3 text-white link'to='/addproducts'>Addproducts</Link>
        
        

      </nav>
      <Routes>
        

        <Route path='/' element={<Getproducts/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/addproducts' element={<Addproducts/>}/>
        <Route path='/mpesapayments' element={<Mpesapayments/>}/>
        
      </Routes>
    </div>
  </Router>
  );
}

export default App;
