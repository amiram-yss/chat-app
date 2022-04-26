import { Row, Col } from 'react-bootstrap'
import './ChatInterface.css'

function ChatInterface() {
    return (
        <div className='split-screen'>
            <div className='left'>
                <div className='user-info'>

                </div>
                <div className='chat-list'>

                </div>

            </div>
            <div className='right'>
                <div className='user-info2'/>
                <div className='messages-container'/>
                <div className='submit-block'/>
            </div>
        </div>
    )
}

export default ChatInterface
