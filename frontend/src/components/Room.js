import React, {useEffect, useState} from 'react';
import { json, useNavigate, useParams } from 'react-router-dom';
import {Grid, 
        Button, 
        Typography, 
        FormControl, 
        FormHelperText, 
        Radio, 
        RadioGroup,
        FormControlLabel,
        TextField,
        Divider} from '@material-ui/core';
import MusicPlayer from './MusicPlayer';



export default function Room() {
    const [votesToSkip, setVotesToSkip] = useState(2);
    const [guestCanPause, setGuestCanPause] = useState(false);
    const [isHost, setIsHost] = useState(false);
    const [showSetting, setShowSetting] = useState(false);
    const [spotifyAuthenticated, setSpotifyAuthenticated] = useState(false);
    const [song, setSong] = useState({})

    const [votesToSkipEdit, setVotesToSkipEdit] = useState(2);
    const [guestCanPauseEdit, setGuestCanPauseEdit] = useState(false);
    
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

                        if(data.is_host) {
                            authenticateSpotify()
                        }
                    })
                }else{
                    navigate("/")
                }
                const interval = setInterval(() => {getCurrentSong()}, [1000])
            });  
    },[]);
    

    function authenticateSpotify() {
        fetch('/spotify/is-authenticated')
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setSpotifyAuthenticated(data.status)
                if(!data.status) {
                    fetch('/spotify/get-auth-url')
                        .then((res) => res.json())
                        .then((data) => {
                            window.location.replace(data.url);
                        })
                }
                
            })
    }

    function getCurrentSong() {
        fetch('/spotify/current-song')
            .then((res) => {
                if(res.ok) {
                    res.json().then((data) => {
                        setSong(data)
                    })
                }else{
                    return {};
                }
            })
    }


    function leaveButtonPressed() {
        const requestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json" },
        }
        fetch('/api/leave-room', requestOptions)
            .then((_res) => {
                navigate("/")
            })
    };

    function settingsButtonPressed() {
        setShowSetting(!showSetting)
    }

    function handleRoomButtonPressed() {
        const requestOptions = {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                votes_so_skip: votesToSkipEdit,
                guest_can_pause: guestCanPauseEdit,
                code: code,
            })
        }

        console.log(requestOptions)

        fetch('/api/update-room', requestOptions)
            .then((res) => {
                if(res.ok){
                    res.json().then((data) => {
                        setShowSetting(!showSetting)
                        setGuestCanPause(data.guest_can_pause)
                        setVotesToSkip(data.votes_so_skip)
                        alert("Room updated!")
                    })
                }
            })
            
    }

    function handleVotesChange(e) {
        setVotesToSkipEdit(e.target.value)
    }

    function handleGuestCanPauseChange(e) {
        setGuestCanPauseEdit(e.target.value === "true" ? true : false)
    }

    function renderSetting() {
        return ( 
        <Grid container spacing={1}>
            
            <Grid item xs={12} align="center">
                <Divider />
                <Divider />
                <Divider />
                <Typography component='h4' variant='h4'>
                    Update Room
                </Typography>
            </Grid>
            <Grid item xs={12} align="center">
                <FormControl component="fieldset" >
                    <FormHelperText>
                            Guest Control of Playback state
                    </FormHelperText>
                    <RadioGroup row defaultValue={guestCanPause.toString()} onChange={handleGuestCanPauseChange}>
                        <FormControlLabel value="true" control={<Radio color="primary" />} label="Play/Pause" labelPlacement="bottom"/>
                        <FormControlLabel value="false" control={<Radio color="secondary" />} label="No control" labelPlacement="bottom"/>
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={12} align="center">
                <FormControl>
                    <TextField required={true} type="number" onChange={handleVotesChange} defaultValue={votesToSkip} inputProps={
                        {
                            min: 1, 
                            style: {
                                textAlign: "center"
                                }}} />
                    <FormHelperText>
                            Votes Required To Skip Song
                    </FormHelperText>
                </FormControl>
            </Grid>
            
            <Grid item xs={12} align="center">
                <Button color='primary' variant='contained' onClick={handleRoomButtonPressed}>
                    Save
                </Button> 
            </Grid>
            <Grid item xs={12} align="center">
                <Button color='secondary' variant='contained' onClick={settingsButtonPressed}>
                    Close
                </Button> 
            </Grid>
        </Grid>)
    }

    return(
        <Grid container spacing={1}>
            <Grid item xs={12} align='center'>
                <Typography variant='h4' component="h4">
                    Code: {code}
                </Typography>
            </Grid>
            
            {song ? <MusicPlayer song={song} /> : null}
            
            {isHost ? <Grid item xs={12} align='center'>
                <Button color='primary' variant='contained' onClick={settingsButtonPressed}>
                    Settings
                </Button>
            </Grid> : null }
            <Grid item xs={12} align='center'>
                <Button color='secondary' variant='contained' onClick={leaveButtonPressed}>
                    Leave Room
                </Button>
            </Grid>
            {showSetting ? renderSetting() : null}
        </Grid>
        
    )
}
