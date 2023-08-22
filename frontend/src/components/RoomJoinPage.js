import React, { useState } from "react";
import {TextField, Button, Grid, Typography} from "@material-ui/core"
import {Link, useNavigate} from "react-router-dom"



export default function RoomJoinPAge() {
    const [roomCode, setRoomCode] = useState("")
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const navigate = useNavigate()

    function handleTextFieldChange(e) {
        setRoomCode(e.target.value)
    }

    function roomButtonPressed() {
        const requestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                code: roomCode
            })
        }
        fetch('/api/join-room', requestOptions)
        .then((res) => {
            if(res.ok){
                navigate(`/room/${roomCode}`)
            } else {
                setError(true)
                setErrorMessage('Room Not Found')
            }
        }).catch((error) => {
            console.log(error)
        })
    }

        return (
            <Grid container spacing={1} >
                <Grid item xs={12} align="center">
                    <Typography variant="h4" component="h4">
                        Join a Room
                    </Typography>
                </Grid>
                <Grid item xs={12} align="center">
                    <TextField 
                        error={error} 
                        label="Code" 
                        placeholder="Enter a Room Code" 
                        value={roomCode} 
                        helperText={errorMessage} 
                        variant="outlined" 
                        onChange={handleTextFieldChange} />
                </Grid>
                <Grid item xs={12} align="center">
                    <Button variant="contained" color="primary" onClick={roomButtonPressed} >Enter Room</Button>
                </Grid>
                <Grid item xs={12} align="center">
                    <Button variant="contained" color="secondary" to="/" component={Link}>Back</Button>
                </Grid>
                
            </Grid>
            )
}

