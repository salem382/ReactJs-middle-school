import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';
import Login from './pages/login/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Teachers from './pages/teachers/Teachers';
function App() {

 
  return (
    <>
    
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/signup' element={<Signup />}/>
              <Route path='/login' element={<Login />}/>
              <Route path='/teachers' element={<Teachers />}/>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
