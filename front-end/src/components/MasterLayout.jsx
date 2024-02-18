import React from 'react';
import Navbar from './Navbar.jsx';
import Sidebar from './Sidebar.jsx';
import Footer from './Footer.jsx';
// import MyRouter from './router/index.js';

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
                        {/*<MyRouter />*/}
                        <main>

                        </main>
                        <Footer />
                    </div>
                </div>

            </div>

        </div>
    );
}

export default MasterLayout;
