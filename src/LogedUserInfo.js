import { Button, Badge, Row, Col, Container } from 'react-bootstrap';
import users from "./server info/Users";
import AddNewContactPop from "./AddNewContactPop";
import User from './data stractures/User.js'


import './LogedUserInfo.css'


import 'bootstrap'
import './ChatTile.css'

function LogedUserInfo(args) {

    const Out = e => {
        args.LogOut();

    }

    //console.warn(args)

    
    return (
        <div>
            <div className='row'>
                <div className='col-2'>
                    <div className='pic-col col'>
                        <div className='test'>
                            <img className='self-prof-pic' src={args.User.picture}></img>
                        </div>
                    </div>
                </div>

                <div className='col'>
                    <div className='self-chat-title'>
                        <div >
                            {args.User.name}
                        </div>
                    </div>
                </div>

                <div className='col'>
                <div className=' col newContact exitBTN'>
                        <Button variant="primary btn-sm " onClick={Out} >
                            <i className="bi bi-box-arrow-right"></i>
                        </Button>
                    </div>

                    <div className=' col newContact'>
                        <AddNewContactPop User={args.User} REnder={args.REnder}/>
                    </div>

                    




                </div>
            </div>
        </div>
    );
}
export default LogedUserInfo