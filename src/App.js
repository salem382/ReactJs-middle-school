import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';
import Login from './pages/login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Teachers from './pages/teachers/Teachers';
import Subjects from './pages/subjects/Subjects';
import Test from './pages/test/Test';
import Setting from './pages/setting/Setting';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { setOpenSidebar, setScreenSize } from './store/sidebarRouteSlice';
import Account from './pages/account/Account';
import Cookies from 'js-cookie';
import {setCurrentLang} from './store/langSlice'
import SubjectLessons from './pages/subjectLessons/SubjectLessons';
import {getUser} from './store/CurrentUser';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TermsAndConditions from './pages/TermsAndConditions/TermsAndConditions';
import ReturnPolicies from './pages/ReturnedPolicies/ReturnedPolicies';
import PrivacyPolicies from './pages/PrivacyPolicies/PrivacyPolicies';
import CancilationPolicy from './pages/CancilationPolicy/CancilationPolicy';
import Membership from './pages/Membership/Membership';



function App() {

  /* get screen size */
  const dispatch = useDispatch();
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
  /*******************************************************/

  
  const currentLang = Cookies.get('i18next') || 'en';
  useEffect(() => {
    document.getElementById('html').lang = currentLang;
    dispatch(setCurrentLang(currentLang));
    dispatch(getUser());
  }, []);




  return (
    <section>
      <BrowserRouter>
      <ToastContainer/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/teachers' element={<Teachers />} />
          <Route path='/subjects' element={<Subjects />} />
          <Route path='/test/:id' element={<Test />} />
          <Route path='/lessons/:id' element={<SubjectLessons />} />
          <Route path='/setting'>
              <Route index element = {<Setting />}/>
          </Route>
          <Route path='/account' element={<Account />} />

          <Route path='/terms' element={<TermsAndConditions />} />
           <Route path='/returnpolicies' element={<ReturnPolicies />} />
          <Route path='/privacypolicies' element={<PrivacyPolicies />} />
          <Route path='/CancilationPolicy' element={<CancilationPolicy />} />
          <Route path='/membership' element={<Membership />} />

          <Route path='*' element={<div className='fs-1 text-center mt-5 text-danger'>Page Not Found 404!</div>} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
