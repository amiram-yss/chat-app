import { Button, Badge, Row, Col, Container } from 'react-bootstrap';
import users from "./server info/Users";
import AddNewContactPop from "./AddNewContactPop";
import User from './data stractures/User.js'


import './LogedUserInfo.css'


import 'bootstrap'
import './ChatTile.css'

function LogedUserInfo(User) {
    //console.log(User.User.User.name)
    console.log(User.User.User)
    return (
        <div>
            <div className='row'>
                <div className='col-2'>
                    <div className='pic-col col'>
                        <div className='test'>
                            <img className='self-prof-pic' src={User.User.User.picture}></img>
                        </div>
                    </div>
                </div>

                <div className='col'>
                    <div className='self-chat-title'>
                        <div >
                            {User.User.User.name}
                        </div>
                    </div>
                </div>

                <div className='col'>
                    <div className=' col newContact'>
                        <AddNewContactPop />
                    </div>
                </div>

            </div>
        </div>

        
    );
}
export default LogedUserInfo


/**
 * 
 * 
 *             <div className='pic-col col'>
                <div className='test'>
                    <img className='self-prof-pic' src={users.at(1).pic}></img>
                </div>
            </div>
            <div className='row'>
                <div className='self-chat-title'>
                    <div >
                        NAME
                    </div>
                </div>
            </div>

    

            <div className=' col-5 newContact'>
                <AddNewContactPop />
            </div>
 *      
 */