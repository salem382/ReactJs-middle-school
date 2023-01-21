import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';
import Login from './pages/login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Teachers from './pages/teachers/Teachers';
import Subjects from './pages/subjects/Subjects';
import Test from './pages/test/Test';
import Setting from './pages/setting/Setting';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { setOpenSidebar, setScreenSize } from './store/sidebarRouteSlice';

function App() {
  const dispatch = useDispatch();
  const { openSidebar } = useSelector((state) => state.sidebarSlice);
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
    });
  };
  useEffect(() => {
    window.addEventListener('resize', setDimension);
    screenSize.dynamicWidth <= 992
      ? dispatch(setOpenSidebar(false))
      : dispatch(setOpenSidebar(true));
    dispatch(setScreenSize(screenSize.dynamicWidth));
    return () => {
      window.removeEventListener('resize', setDimension);
    };
  }, [screenSize]);
  return (
    <section>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/teachers' element={<Teachers />} />
          <Route path='/subjects' element={<Subjects />} />
          <Route path='/test' element={<Test />} />
          <Route path='/setting' element={<Setting />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
