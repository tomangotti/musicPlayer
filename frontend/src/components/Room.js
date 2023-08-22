import React, {useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {Grid, Button, Typography} from '@material-ui/core'


// export default class Room extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             votesToSkip: 2,
//             guestCanPause: false,
//             isHost: false,
//         };
//         this.getRoomDetails();
//     }

//     getRoomDetails() {
//         fetch('/api/get-room' + '?code=' + this.props.code)
//             .then((res) => res.json())
//             .then((data) => {
//                 this.setState({
//                     votesToSkip: data.votes_so_skip,
//                     guestCanPause: data.guest_can_pause,
//                     isHost: data.is_host,
//                 })
//             })
//     }

//     render() {
//         const { code } = this.props
//         return <div>
//             <h3>{code}</h3>
//             <p>Votes: {this.state.votesToSkip}</p>
//             <p>Guest can pause: {this.state.guestCanPause.toString()}</p>
//             <p>Host: {this.state.isHost.toString()}</p>
//         </div>
//     };
// }

export default function Room() {
    const [votesToSkip, setVotesToSkip] = useState(2);
    const [guestCanPause, setGuestCanPause] = useState(false);
    const [isHost, setIsHost] = useState(false);
    
    const navigate = useNavigate();
    const { code } = useParams();

    useEffect(() => {
        fetch('/api/get-room' + '?code=' + code)
            .then((res) => {
                if(res.ok){
                    res.json().then((data) => {
                        setVotesToSkip(data.votes_so_skip)
                        setGuestCanPause(data.guest_can_pause)
                        setIsHost(data.is_host)
                    })
                }else{
                    navigate("/")
                }
            })
            
    },[])

    function leaveButtonPressed() {
        const requestOptions = {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
        }
        fetch('/api/leave-room', requestOptions)
            .then((_res) => {
                navigate("/")
            })
    }

    return(
        <Grid container spacing={1}>
            <Grid item xs={12} align='center'>
                <Typography variant='h4' component="h4">
                    Code: {code}
                </Typography>
            </Grid>
            <Grid item xs={12} align='center'>
                <Typography variant='h6' component="h6">
                    Votes: {votesToSkip}
                </Typography>
            </Grid>
            <Grid item xs={12} align='center'>
                <Typography variant='h6' component="h6">
                    Guest can Pause: {guestCanPause ? "Yes" : "No"}
                </Typography>
            </Grid>
            <Grid item xs={12} align='center'>
                <Typography variant='h6' component="h6">
                    Host: {isHost.toString()}
                </Typography>
            </Grid>
            <Grid item xs={12} align='center'>
                <Button color='secondary' variant='contained' onClick={leaveButtonPressed}>
                    Leave Room
                </Button>
            </Grid>
            

        </Grid>
        // <div>
        //     <h3>{code}</h3>
        //     <p>Votes: {votesToSkip}</p>
        //     <p>Guest can pause: {guestCanPause.toString()}</p>
        //     <p>Host: {isHost.toString()}</p>
        // </div>
    )
}
