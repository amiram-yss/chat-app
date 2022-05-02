import MessageBubble from "./MessageBubble";
import './ChatList.css'
import { Col, Container, Row } from "react-bootstrap";

function MessageBubbleList(args) { //args.User, args.chat
    console.log(args)
    let msg = args.chat.messages
    var messagesList
    if(args.chat != "") {
        messagesList = args.chat.messages.map((message, key) => {
            return (
                <Row className="bubble-row">
                    <div className="bubble-row">
                        <MessageBubble
                            addresser={message.addresser == args.User? true: false}
                            content={message.content}
                            time={message.time}
                            key = {key}
                        />
                    </div>
                </Row>
            )
        })
    }

    return (
        <div>
            <Col>
                <div messagesList="lst">
                    {messagesList}
                </div>
            </Col>
        </div>
    )
}

export default MessageBubbleList