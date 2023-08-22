import React, { useEffect, useState} from "react";
import { Grid, Button, ButtonGroup, Typography} from '@material-ui/core'
import {
    useNavigate,
    Link,
    redirect
    } from "react-router-dom";



export default function HomePage(){
    const [roomCode, setRoomCode] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/api/user-in-room')
            .then((res) => res.json())
            .then((data) => {
                setRoomCode(data.code)
                if(data.code){
                    navigate(`/room/${data.code}`)
                }
            })
    },[])

    
    

    return(
        <Grid container spacing={3}>
                <Grid item xs={12} align='center'>
                    <Typography variant="h3" compact="h3">
                        House Party
                    </Typography>
                </Grid>
                <Grid item xs={12} align='center'>
                    <ButtonGroup disableElevation variant="contained" color="primary">
                        <Button color="primary" to="/join" component={Link}>
                            Join a Room
                        </Button>
                        <Button color="secondary" to="/create" component={Link}>
                            Create a Room
                        </Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
    )
}

