import React from "react";
import { Grid, Typography, Card, IconButton, LinearProgress } from "@material-ui/core";
import {PlayArrow, SkipNext, Pause} from "@material-ui/icons"



export default function MusicPlayer({song}){
    const songProgress = (song.time / song.duration) * 100;
    
    return(
        <Card>
            <Grid container spacing={1}>
                <Grid item align="center" xs={4}>
                    <img src={song.image_url} height="100%" width="100%" />
                </Grid>
                <Grid item align="center" xs={8}>
                    <Typography component="h5" variant="h5">
                        {song.title}
                    </Typography>
                    <Typography color="textSecondary" component="h5" variant="h5">
                        {song.artist}
                    </Typography>
                    <div>
                        <IconButton>
                            {song.is_playing ? <Pause /> : <PlayArrow />}
                        </IconButton>
                        <IconButton>
                            <SkipNext />
                        </IconButton>
                    </div>
                </Grid>
            </Grid>
            <LinearProgress variant="determinate" value={songProgress} />

            
        </Card>
    )
}