import { BrowserRouter , Routes, Route } from 'react-router-dom'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import Layout from './Layout';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact Us/Contact';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
function App() {
  return (
    <div className="App">
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='Contact' element={<Contact/>}/>
     
      </Route>
       <Route path='Login' element={<Login/>}/>
       <Route path='Register' element={<Register/>}/>
    </Routes>
    </BrowserRouter>
    </>
    </div>
  );
}

export default App;
