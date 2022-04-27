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
            <div className='right flex-sub-container'>
            <div className='user-info2'/>
            <div className='messages-container'/>
            <div className='submit-block flex-item-bottom'/>

            </div>
        </div>
    )
}

export default ChatInterface
