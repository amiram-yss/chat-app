/**
 * @author Amiram Yassif
 */
import { Card, Container } from 'react-bootstrap'
import './MessageBubble.css'

/**
 * Message bubble item for chat view
 * @param {*} args content, time
 * @returns 
 */
function MessageBubble(args) {
    const messageType = 'message-bubble ' + (args.addresser ? 'message-sent' : 'message-recieved')
    console.log('val is ' + args.addresser)
    return (
        <Card className={messageType}>
            <span className='message-content'>{args.content}</span>
            <div>
                <span className='message-time'>{args.time}</span>
            </div>
        </Card>
    )
}

export default MessageBubble