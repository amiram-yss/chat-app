/**
 * @author Amiram Yassif
 */
import { Card, Container } from 'react-bootstrap'
import './MessageBubble.css'
import timeStringForComponents from './Time'

/**
 * Message bubble item for chat view
 * @param {*} args content, time
 * @returns 
 */
function MessageBubble(args) {
    const messageType = 'message-bubble ' + (args.addresser ? 'message-sent' : 'message-recieved')
    return (
        <div className='test'>
            <Card className={messageType}>
                <span className='message-content'>{args.content}</span>
                <div>
                    <span className='message-time'>{timeStringForComponents(args.time)}</span>
                </div>
            </Card>
        </div>
    )
}

export default MessageBubble