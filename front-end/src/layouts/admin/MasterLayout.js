import React from 'react';
import { Navigate, Router, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar.jsx';
import Sidebar from './Sidebar.jsx';
import Footer from './Footer.jsx';

import MyRouter from "../../router/index";
function MasterLayout() {
    return (
        <div className ="App">
            <div className='sb-nav-fixed'>
                <Navbar />

                <div id="layoutSidenav">
                    <div id = "layoutSidenav_nav">
                        <Sidebar />
                    </div>

                    <div id = "layoutSidenav_content">
                        <main>

                                <Routes>
                                    {MyRouter.map((route, idx) => {
                                        return(
                                            route.component && (
                                                <Route
                                                    key={idx}
                                                    path={route.path}
                                                    exact={route.exact}
                                                    name={route.name}
                                                    render={(props)=>(
                                                        <route.component {...props} />
                                                    )}
                                                />
                                            )
                                        )
                                    })}

                                </Routes>

                        </main>
                        <Footer />
                    </div>
                </div>

            </div>

        </div>
    );
}

export default MasterLayout;
