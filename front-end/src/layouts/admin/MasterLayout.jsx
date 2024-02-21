import React from 'react';
import Navbar from './Navbar.jsx';
import Sidebar from './Sidebar.jsx';
import Footer from './Footer.jsx';

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
                            <h1>This is Master Layout</h1>
                        </main>
                        <Footer />
                    </div>
                </div>

            </div>

        </div>
    );
}

export default MasterLayout;
