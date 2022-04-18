/**@author Amiram Yassif */
import { Button, Badge } from 'react-bootstrap';
import 'bootstrap'
import './ChatTile2.css'

/**
 * Chat tile, set on the main page on the left.
 * @param {*} args
 * @param {unreadCounter} Num of unread messages
 * @param {profPic} Profile picture
 * @param {lastMessageTime} Recieve time of last message
 * @param {chatTitle} Name of content
 * @param {lastMessage} Test of last message.
 * @returns 
 */
function ChatTile2(args) {
    return (
        <Button className="chat-tile-container">
            {args.unreadCounter < 1? <></>:<Badge className='notification-bubble'>{args.unreadCounter}</Badge>}
            <img className='prof-pic' src={args.profPic}></img>
            <div className='time-text'>
                {args.lastMessageTime}
            </div>
            <div className='chat-title'>{args.chatTitle}</div>
            <div className='last-message'>{args.lastMessage}</div>
            
        </Button>
    );
}

export default ChatTile2