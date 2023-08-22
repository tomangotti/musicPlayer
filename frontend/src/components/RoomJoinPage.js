import React, { useState } from "react";
import {TextField, Button, Grid, Typography} from "@material-ui/core"
import {Link, useNavigate} from "react-router-dom"

// export default class RoomJoinPAge extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             roomCode: "",
//             error: "",
//         }

//         this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
//         this.roomButtonPressed = this.roomButtonPressed.bind(this);
//     }

//     handleTextFieldChange(e) {
//         this.setState({
//             roomCode: e.target.value
//         })
//     }

//     roomButtonPressed() {
//         const requestOptions = {
//             method: "POST",
//             headers: {"Content-Type": "application/json"},
//             body: JSON.stringify({
//                 code: this.state.roomCode
//             })
//         }
//         fetch('/api/join-room', requestOptions)
//         .then((res) => {
//             if(res.ok){
                
//                 this.props.navigate(`/room/${this.state.roomCode}`)
//             } else {
//                 this.setState({error: "Room Not Found."})
//             }
//         }).catch((error) => {
//             console.log(error)
//         })
//     }

//     render() {
//         return (
//             <Grid container spacing={1} >
//                 <Grid item xs={12} align="center">
//                     <Typography variant="h4" component="h4">
//                         Join a Room
//                     </Typography>
//                 </Grid>
//                 <Grid item xs={12} align="center">
//                     <TextField 
//                         error={this.state.error} 
//                         label="Code" 
//                         placeholder="Enter a Room Code" 
//                         value={this.state.roomCode} 
//                         helperTest={this.state.error} 
//                         variant="outlined" 
//                         onChange={this.handleTextFieldChange} />
//                 </Grid>
//                 <Grid item xs={12} align="center">
//                     <Button variant="contained" color="primary" onClick={this.roomButtonPressed} >Enter Room</Button>
//                 </Grid>
//                 <Grid item xs={12} align="center">
//                     <Button variant="contained" color="secondary" to="/" component={Link}>Back</Button>
//                 </Grid>
                
//             </Grid>
//             )
//     }

// }

export default function RoomJoinPAge() {
    const [roomCode, setRoomCode] = useState("")
    const [error, setError] = useState("")
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
                setError("Room Not Found")
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
                        helperTest={error} 
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

