import React, { useState } from 'react';
import {Routes, Route} from 'react-router-dom'
import Layout from './Layout';
import Home from './components/Home/Home';
import LoginForm from './components/Login&Register/LoginForm';
import RegisterForm from './components/Login&Register/RegisterForm';
// import ApplicantsInfo from './components/Adopt/ApplicantsInfo';
import Adopt from './components/Adopt/Adopt';
import SearchDog from './components/dogdata/SearchDog';
import Dogdata from './components/dogdata/Dogdata';


const App = () => {

  return (
    <>

    <Routes>
   
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        {/* <Route path='/applicants' element={<Adopt />} /> */}
        {/* <Route path='/searchDog' element={<SearchDog />} />
        <Route path='/dogdata' element={<Dogdata />} /> */}
        <Route path='/login' element={<LoginForm />} />
        <Route path='/register' element={<RegisterForm />} />
        <Route path='/register' element={<RegisterForm />} />
      </Route>
    
    </Routes>

    </>
  );
};

export default App;
