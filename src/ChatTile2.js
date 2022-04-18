import { Button, ToggleButton, Flex } from 'react-bootstrap';
import './ChatTile2.css'

function ChatTile2() {
    return (
        <Button className='container' variant='light'>
            <div class="container">
                <div class="row">
                    <div class="col-md-4">.col-md-4</div>
                    <div class="col-md-4 ms-auto">.col-md-4 .ms-auto</div>
                </div>
                <div class="row">
                    <div class="col-md-3 ms-md-auto">.col-md-3 .ms-md-auto</div>
                    <div class="col-md-3 ms-md-auto">.col-md-3 .ms-md-auto</div>
                </div>
                <div class="row">
                    <div class="col-auto me-auto">.col-auto .me-auto</div>
                    <div class="col-auto">.col-auto</div>
                </div>
            </div>
        </Button>
    );
}

export default ChatTile2