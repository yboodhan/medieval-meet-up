import React, { useState, useEffect} from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import ChatHeader from './ChatHeader'

const Chat = props => {

    let [message, setMessage] = useState('')
    let [chatHistory, setChatHistory] = useState([])
    // let [isHidden, setIsHidden] = useState(true)

    // useEffect(()=> {
    //     setChatHistory()
    // }, [])

    
    let chats = chatHistory.map((chat, i) => {
        if (i%2 === 0) {
            return (
                <div key={i} id="user-chat">
                    {chat}
                </div>
            )
        }
        else if (i%2 !== 0) {
            return (
                <div key={i} id="response-chat">
                    {chat}
                </div>
            )
        }
    })

    let replyArr = [
        "Reply 1",
        "Reply 2",
        "Reply 3"
    ]

    let hist
    const addReply = () => {
        if (chatHistory.length === 1) {
            chatHistory.push("...")
            setTimeout(() => {
                console.log(chatHistory)
                console.log('Timeout now')
                chatHistory.pop()
                chatHistory.push(replyArr[0])
                console.log(chatHistory)
            }, (1000))
            // setTimeout(()=> {
            //     hist = chatHistory
            //     hist.push(replyArr[0])
            //     setChatHistory(hist)
            //     console.log(chatHistory)
            // }, 1100)
        }
        else if (chatHistory.length === 3) {
            chatHistory.push(replyArr[1])
        }
        else if (chatHistory.length === 5) {
            chatHistory.push(replyArr[2])
        }
    }

    let msges
    const addChat = (e) => {
        e.preventDefault()
        console.log(message)
        // try changing state
        msges = chatHistory
        msges.push(message)
        setChatHistory(msges)
        console.log(chatHistory)

        setMessage('')
        addReply()
    }

    // const toggleHidden = () => {
    //     if (isHidden === true) {
    //         setIsHidden(false)
    //     }
    //     else {
    //         setIsHidden(true)
    //     }
    // }

    // let keyboard
    // if (isHidden === false) {
    //     keyboard = (
    //         <Row>
    //             <Col sm="12" md={{ size: 6, offset: 3 }} >
    //                 <div className="chat-keyboard">
    //                     {/* <img src="https://i.imgur.com/cTe85Nm.png" /> */}
    //                 </div>
    //             </Col>
    //         </Row>
    //     )
    // }
    
    
    

    return (
        <Container>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }} >
                    <div className="chat-header">
                        <ChatHeader />
                        {/* <p>Your chat with: Dragon</p> */}
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <div className="chat-container">
                        {chats}
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <div className="chat-input">
                        <form>
                            <input autocomplete="off" className="text-input" type="text" placeholder="Enter new message" value={message} name="message" onChange={e => setMessage(e.target.value)} />
                            <button className="chat-button" type="submit" onClick={addChat}>Send</button>
                        </form>
                    </div>
                </Col>
            </Row>
            {/* {keyboard} */}

            
        </Container>
    )
}

export default Chat

                    //useEffect to update state after response to re-render with replyArr[x] after '...' and remove '...'

//display messages on either side of the container ---------------{DONE}
                    //add colors if chatHistory.length is odd or even;  add chat display image (like wireframes?) - need to position message text inside

//create 'reply' array of responses to display in response to user messages----------------{DONE}
                    // decide what the presentaton chat will be, and update reply text above accordingly

//create '...' message to display for 2 seconds before reply message posts----------------{DONE}

//add in keyboard image and text input bar when text field selected
    //add to imgur==== "https://i.imgur.com/cTe85Nm.png"
    //create new row, div in Chat = keyboard
    //add background image in css
    //conditionally render div when input field selected
                    //move text-input over the top of the input bar image to mimic------------------------------{DONE}