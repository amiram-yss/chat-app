import { Row, Col, Container } from 'react-bootstrap'
import './ChatInterface.css'
import ChatList from './ChatList'
import MessageBubbleList from './MessageBubbleList'
import SubmissionView from './SubmissionView'
import LogedUserInfo from './LogedUserInfo'




function ChatInterface() {
    return (
        <Row className='screen'>
            <Col className='left'>
                <Row className='logged-user-info'>
                    <LogedUserInfo />

                </Row>
                <Row className='chat-list-container'>
                    <ChatList />
                </Row>
            </Col>
            <Col className='right g-0'>
                <Row className='chat-user-info'>

                </Row>
                <Row className='messages-container'>
                    <Container>
                        <Col>
                            <MessageBubbleList />
                        </Col>
                    </Container>
                </Row>
                <Row className='submit-block'>
                    <div >
                        <SubmissionView className='submittion-block' />
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