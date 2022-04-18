import { Button, ToggleButton } from 'react-bootstrap';
import './ChatTile.css'

function ChatTile(args) {
    return (
        <Button className='container' variant='light'>
            <div className='row'>
                <div className='col col-profile-picture'>
                    <img className='pic' src={args.profilePicture} />
                </div>
                <div className='col textual-col'>
                    <div className='row chat-name text-settings'>
                        {args.chatName}
                    </div>
                    <div className='row last-message text-settings'>
                        <div className='col'>
                            {args.lastMessage}
                        </div>
                    </div>
                    
                </div>


            </div>

        </Button>
    );
}

export default ChatTile
/**
 * <div className='col details-col'>
                    <div className='row'>
                        {args.unreadCounter == '0' ? <></> : <span class="badge rounded-pill bg-danger">{args.unreadCounter}</span>}
                    </div>
                    <div className='col dateText'>
                            {args.timeLastMessage}
                        </div>
                </div>
 */