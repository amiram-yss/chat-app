import { Row, Col, Container } from 'react-bootstrap'
import './ChatInterface.css'
import ChatList from './ChatList'
import MessageBubbleList from './MessageBubbleList'
import SubmissionView from './SubmissionView'
import LogedUserInfo from './LogedUserInfo'
import { useState } from 'react';
import Chat from "./data stractures/User";

import users from "./server info/Users";




function ChatInterface(args) {


    const [A, setA] = useState({ change: "" });

    const REnder = e => {
        setA({ change: "B" })
    }

    const [activeChat, setActiveChat] = useState({ activeChat: "" });

    const changeActiveChat = chat => {
        setActiveChat({ activeChat: chat })
    }




    return (
        <Row className='screen'>
            <Col className='left'>
                <Row className='logged-user-info'>
                    <LogedUserInfo User={args.User} LogOut = {args.LogOut}/>

                </Row>
                <Row className='chat-list-container'>
                    <ChatList User={args.User} changeActiveChat = {changeActiveChat} />

                </Row>
            </Col>
            <Col className='right g-0'>
                <Row className='chat-user-info'>

                </Row>
                <Row className='messages-container' >

                    <Container>
                        <Col>
                            <MessageBubbleList User={args.User} chat={activeChat.activeChat}/>

                        </Col>
                    </Container>


                </Row>
                <Row className='submit-block'>
                    <div >
                        <SubmissionView className='submittion-block' onSubmitClick={() => {
                            console.log('> ' + activeChat.activeChat)
                        }} REnder={REnder}/>
                    </div>
                </Row>
            </Col>
        </Row>
    )
}

export default ChatInterface
/**
 * <div className='split-screen'>
            <div className='left'>
                <div className='user-info'>
                    
                </div>
                <div className='chat-list'>

                </div>
            </div>
            <div className='right flex-sub-container'>
                <div className='user-info2' />
                <div className='messages-container' />
                <div className='submit-block flex-item-bottom' />
            </div>
        </div>
 */