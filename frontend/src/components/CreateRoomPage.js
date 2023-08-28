import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import  Grid  from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { TextField } from "@material-ui/core";
import { FormHelperText } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import {Link, useNavigate} from "react-router-dom";
import { Radio } from "@material-ui/core";
import { RadioGroup } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";


export default function CreateRoomPage(){
    const [guestCanPause, setGuestCanPause] = useState(true);
    const [votesToSkip, setVotesToSkip] = useState(2)
    const [guestCanAddToQue, setGuestCanAddToQue] = useState(false);
    const navigate = useNavigate()

    function handleVotesChange(e) {
        setVotesToSkip(e.target.value)
    }

    function handleGuestCanPauseChange(e) {
        setGuestCanPause(e.target.value === "true" ? true : false)
    }

    function handleGuestCanAddToQueChange(e) {
        setGuestCanAddToQue(e.target.value === "true" ? true : false)
    }

    
    function handleRoomButtonPressed() {
        const requestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                votes_so_skip: votesToSkip,
                guest_can_pause: guestCanPause,
                guest_can_add_to_que: guestCanAddToQue
            })
        }
        fetch('/api/create_room', requestOptions)
            .then((res) => res.json())
            .then((data) => {
                navigate(`/room/${data.code}`);
            })
    }

    return(
        <Grid container spacing={1}>
                <Grid item xs={12} align="center">
                    <Typography component='h4' variant='h4'>
                        Create a Room
                    </Typography>
                </Grid>
                <Grid item xs={12} align="center">
                    <FormControl component="fieldset" >
                        <FormHelperText>
                                Guest Control of Playback state
                        </FormHelperText>
                        
                        <RadioGroup row defaultValue='true' onChange={handleGuestCanPauseChange}>
                            <FormControlLabel value="true" control={<Radio color="primary" />} label="Play/Pause" labelPlacement="bottom"/>
                            <FormControlLabel value="false" control={<Radio color="secondary" />} label="No control" labelPlacement="bottom"/>
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} align="center">
                    <FormControl component="fieldset" >
                        <FormHelperText>
                                Guest Can Add to Que
                        </FormHelperText>
                        
                        <RadioGroup row defaultValue='true' onChange={handleGuestCanAddToQueChange}>
                            <FormControlLabel value="true" control={<Radio color="primary" />} label="Yes" labelPlacement="bottom"/>
                            <FormControlLabel value="false" control={<Radio color="secondary" />} label="No" labelPlacement="bottom"/>
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} align="center">
                    <FormControl>
                        <TextField required={true} type="number" onChange={handleVotesChange} defaultValue={2} inputProps={
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
                    <Button color="primary" variant="contained" onClick={handleRoomButtonPressed}>Create A Room</Button>
                </Grid>
                <Grid item xs={12} align="center">
                    <Button color="secondary" variant="contained" to="/" component={Link}>Back</Button>
                </Grid>
            </Grid>
    )
}