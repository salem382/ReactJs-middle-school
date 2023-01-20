import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';
import Login from './pages/login/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Teachers from './pages/teachers/Teachers';
import Test from './pages/test/Test';
import Setting from './pages/setting/Setting';

function App() {
 
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/signup' element={<Signup />}/>
              <Route path='/login' element={<Login />}/>
              <Route path='/teachers' element={<Teachers />}/>
              <Route path='/test' element={<Test />}/>
              <Route path='/setting' element={<Setting />}/>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
