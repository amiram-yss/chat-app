import RegistrationForm from './RegistrationForm';
import { BrowserRouter, Routes, Route, Switch, Link } from 'react-router-dom';
import './LoginCard.css';


function LoginCard() {
    return (

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

            <p >Not a member? <Link to="/Register" >Register</Link></p>
        


        </form>

    )
}

export default LoginCard;