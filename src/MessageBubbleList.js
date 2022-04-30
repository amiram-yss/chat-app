import MessageBubble from "./MessageBubble";
import './ChatList.css'
import { Col, Container, Row } from "react-bootstrap";

function MessageBubbleList(args) { //args.User, args.chat
    console.log(args)
    var messagesList
    if(args.chat != "") {
        messagesList = args.chat.messages.map((message, key) => {
            return (
                <Row className="bubble-row">
                    <div className="bubble-row">
                        <MessageBubble
                            addresser={message.addresser}
                            content={message.content}
                            time={message.time}
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