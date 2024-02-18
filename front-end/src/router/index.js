import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import Contact from '../pages/Contact.jsx';
import StudentList from '../pages/Student.jsx';
import Register from '../components/auth/Register';
import Login from '../components/auth/Login';

import Dashbaord from "../pages/Dashbaord.jsx";


function MyRouter(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/dashbaord" element={<Dashbaord />} />
            <Route path="/students" element={<StudentList />} />
            {/*<Route path="/student/create" element={<Addstudents />} />*/}
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}

export default MyRouter;
