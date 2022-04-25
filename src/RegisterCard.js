
import { BrowserRouter, Routes, Route, Switch, Link } from 'react-router-dom';


function RegisterCard (){
    return (

        <form >
            <div className="row">
                <div className="col"><span className="text-danger">User Name</span></div>
                <div className="col-9 ">

                    <div className="form-outline mb-4">
                        <input type="text" id="form3Example1" className="form-control" />
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
                <div className="col"><span className="text-danger">Display Name</span></div>
                <div className="col-9 ">

                    <div className="form-outline mb-4">
                        <input type="text" id="form3Example3" className="form-control" />
                        <label className="form-label" htmlFor="form3Example3"></label>
                    </div>
                </div>
            </div>



            <div className="row">
                <button type="submit" className="btn btn-primary btn-block mb-4">
                    register
                </button>
            </div>

            <div className="row">
                <p >Already register? <Link to="/" >Login</Link></p>
                

            </div>


        </form>

    )
}

export default RegisterCard;