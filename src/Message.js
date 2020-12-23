import React, { forwardRef } from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import "./Message.css"


const Message = forwardRef(({message, username}, ref) => {
    const isUser = username === message.username;
    
    return (
        <div ref={ref} className={`message ${isUser && 'message-user'}`}>
            <Card className={isUser? "message-userCard" : "message-guestCard"}>
                <CardContent>
                    <Typography
                    color="white"
                    variant="h5"
                    component="h2"
                    >
                    {!isUser && `${message.username || 'Unknown User'}  `}:{message.message}
                    </Typography>
                </CardContent>
            </Card>
     
            <h4> </h4>
        </div>
    )
})

export default Message
