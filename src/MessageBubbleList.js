import MessageBubble from "./MessageBubble";
import './ChatList.css'
import { Col, Container, Row } from "react-bootstrap";


function MessageBubbleList(User) {
    var messages = [

        
    ]
    var messagesList = messages.map((message, key) => {

        console.log("aaa");
        console.log(User.chats);
        console.log("bbb");
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

/**
 * 
 * 
 * 
 *     var messagesList = messages.map((message, key) => {
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
 * 
 * 
 * 
 * 
 * 
 * {
            addresser: false,
            content: 'I\'m doing great! How are you? I\'m doing great! How are you? I\'m doing great! How are you? I\'m doing great! How are you? I\'m doing great! How are you?',
            time: '12:36'
        },
        {
            addresser: true,
            content: 'I\'m good, thx :)',
            time: '12:36'
        },
        {
            addresser: true,
            content: 'I\'m good, thx :)',
            time: '12:36'
        },
        {
            addresser: true,
            content: 'I\'m good, thx :)',
            time: '12:36'
        },
        {
            addresser: true,
            content: 'I\'m good, thx :)',
            time: '12:36'
        },
        {
            addresser: true,
            content: 'I\'m good, thx :)',
            time: '12:36'
        },
        {
            addresser: true,
            content: 'I\'m good, thx :)',
            time: '12:36'
        },
        {
            addresser: false,
            content: 'I\'m doing great! How are you? I\'m doing great! How are you? I\'m doing great! How are you? I\'m doing great! How are you? I\'m doing great! How are you?',
            time: '12:36'
        },
        {
            addresser: false,
            content: 'I\'m doing great! How are you? I\'m doing great! How are you? I\'m doing great! How are you? I\'m doing great! How are you? I\'m doing great! How are you?',
            time: '12:36'
        },
        {
            addresser: false,
            content: 'I\'m doing great! How are you? I\'m doing great! How are you? I\'m doing great! How are you? I\'m doing great! How are you? I\'m doing great! How are you?',
            time: '12:36'
        },
        {
            addresser: false,
            content: 'I\'m doing great! How are you? I\'m doing great! How are you? I\'m doing great! How are you? I\'m doing great! How are you? I\'m doing great! How are you?',
            time: '12:36'
        },
        {
            addresser: false,
            content: 'I\'m doing great! How are you? I\'m doing great! How are you? I\'m doing great! How are you? I\'m doing great! How are you? I\'m doing great! How are you?',
            time: '12:36'
        },




 */