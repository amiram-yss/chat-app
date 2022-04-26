import { Row, Col, Container } from 'react-bootstrap'
import './ChatInterface.css'

function ChatInterface() {
    return (
        <Container className='screen'>
            <Row className='screen'>
                <Col className='left'>
                    <Row className='logged-user-info'>

                    </Row>
                </Col>
                <Col className='right'>
                    <Row className='chat-user-info'>

                    </Row>
                    <Row className='messages-container'>

                    </Row>
                    <Row className='submit-block'>

                    </Row>
                </Col>
            </Row>
        </Container>
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