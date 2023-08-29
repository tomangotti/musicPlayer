import React from "react";
import { Grid, Typography, Card, Button } from "@material-ui/core";



export default function SearchCard({song}) {



    function handleAddToQue(){
        const requestBody = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                uri: song.uri
            })
        }
        fetch('/spotify/addToQue', requestBody)
            .then((res) => {
                if(res.ok){
                    res.json().then((data) => {
                        console.log(data)
                    }
                    )
                }
            })
    }



    return(
        <Card align="center" style={{width: "100%", height: "45px"}}>
            <Grid container spacing={4} >
                <Grid item align="center" xs={3}>
                    <Typography component="h5" variant="h5">
                    <img src={song.image_url} height="100%" width="100%" />
                    </Typography>
                </Grid>
                <Grid item align="center" xs={5}>
                    <Typography component="h5" variant="h5" style={{fontSize: "15px"}}>
                        {song.track_name}
                    </Typography>
                </Grid>
                <Grid item align="center" xs={2}>
                    <Typography color="textSecondary" variant="subtitle1" style={{fontSize: "12px"}}>
                        {song.artist_name}
                    </Typography>
                </Grid>
                <Grid item align="center" xs={1}>
                    <Button color="secondary" onClick={handleAddToQue}>
                        +
                    </Button>
                </Grid>
            </Grid>
        </Card>
    )
}