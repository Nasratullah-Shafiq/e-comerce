import React from 'react';
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import Footer from './components/Footer.jsx';
import MyRouter from './router/index.js';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./assets/css/styles.css";
import "./assets/js/scripts.js";
function App() {
  return (
    <div className ="App">
        <div className='sb-nav-fixed'>
            <Navbar />

            <div id="layoutSidenav">
                <div id = "layoutSidenav_nav">
                    <Sidebar />
                </div>

                <div id = "layoutSidenav_content">
                    <MyRouter />
                    <main>

                    </main>
                    <Footer />
                </div>
            </div>

        </div>
      {/*<Navbar />*/}
        {/*<Sidebar />*/}

      {/*<MyRouter />*/}
        {/*<Footer />*/}
    </div>
  );
}

export default App;
