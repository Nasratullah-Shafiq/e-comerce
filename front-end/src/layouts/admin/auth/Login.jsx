import React from 'react';
import {Link} from 'react-router-dom';
const Login = () => {
    return (
        <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-5">
                                <div className="card shadow-lg border-0 rounded-lg mt-5">
                                    <div className="card-header"><h3
                                        className="text-center font-weight-light my-4">Login</h3></div>
                                    <div className="card-body">
                                        <form>
                                            <div className="form-floating mb-3">
                                                <input className="form-control" id="inputEmail" type="email"
                                                       placeholder="name@example.com"/>
                                                <label htmlFor="inputEmail">Email address</label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input className="form-control" id="inputPassword" type="password"
                                                       placeholder="Password"/>
                                                <label htmlFor="inputPassword">Password</label>
                                            </div>
                                            <div className="form-check mb-3">
                                                <input className="form-check-input" id="inputRememberPassword"
                                                       type="checkbox" value=""/>
                                                <label className="form-check-label" htmlFor="inputRememberPassword">Remember
                                                    Password</label>
                                            </div>
                                            <div
                                                className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                                <Link className="small" to="password.html">Forgot Password?</Link>
                                                <Link className="btn btn-primary" to="index.html">Login</Link>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="card-footer text-center py-3">
                                        <div className="small"><Link to="register.html">Need an account? Sign up!</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <div id="layoutAuthentication_footer">
                <footer className="py-4 bg-light mt-auto">
                    <div className="container-fluid px-4">
                        <div className="d-flex align-items-center justify-content-between small">
                            <div className="text-muted">Copyright &copy; Your Website 2023</div>
                            <div>
                                <Link to="#">Privacy Policy</Link>
                                &middot;
                                <Link to="#">Terms &amp; Conditions</Link>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );

}
export default Login;
