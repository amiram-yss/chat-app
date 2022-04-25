import RegistrationForm from './RegistrationForm';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function LoginForm() {
    return (

        /**
         * 
         * 
         * 




               
         */

        <section >
            <div id="first" className="px-4 py-5 px-md-5 text-center background " >
                <div className="container ">
                    <div className="row gx-lg-5 align-items-center">
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h1 className="my-5 display-5 fw-bold ls-tight">
                            Welcome to the inner WhatsApp of   <br />
                                <span className="text-warning display-3 fw-bold">Bikini Bottom</span>
                            </h1>
                            <p className='welcomeText'>
                                
                            </p>
                        </div>

                        <div className="col-lg-8 mb-5 mb-lg-0">
                            <div className="card">
                                <div className="card-body py-5 px-md-5">

                                
                                    <form >
                                        <div className="row">
                                            <div className="col"><span className="text-danger">User Name</span></div>
                                            <div className="col-9 ">

                                                <div className="form-outline mb-4">
                                                    <input type="text" id="form3Example5" className="form-control" />
                                                    <label className="form-label" htmlFor="form3Example3"></label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col"><span className="text-danger">Password</span></div>
                                            <div className="col-9 ">

                                                <div className="form-outline mb-4">
                                                    <input type="password" id="form3Example2" className="form-control" />
                                                    <label className="form-label" htmlFor="form3Example3"></label>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="row">
                                            <button type="submit" className="btn btn-primary btn-block mb-4">
                                                Sign up
                                            </button>
                                        </div>                                      

                                        <p >Not a member? <a href="/register">Register</a></p>
                                        <p>back Login <a href="/">Login</a></p>
                                    
                           
                                    </form>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                   
                </div >
                
                
            </div>

            
                
            
        </section>
    )
}

export default LoginForm;