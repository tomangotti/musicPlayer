import React from "react";
import { Grid, Typography, Card, IconButton, LinearProgress } from "@material-ui/core";
import {PlayArrow, SkipNext, Pause} from "@material-ui/icons"



export default function MusicPlayer({song}){
    const songProgress = (song.time / song.duration) * 100;

    function handlePlayPauseButton() {
        song.is_playing ? pauseSong() : playSong()
    }

    function skipSong() {
        const putObject = {
            method: "POST",
            headers: {"Content-Type": "application/json"}
        }
        fetch('/spotify/skip', putObject)
    }

    function pauseSong() {
        const putObject = {
            method: "PUT",
            headers: {"Content-Type": "application/json"}
        }
        fetch('/spotify/pause', putObject)
    }

    function playSong() {
        const putObject = {
            method: "PUT",
            headers: {"Content-Type": "application/json"}
        }
        fetch('/spotify/play', putObject)
    }
    
    return(
        
        <Card align="center" style={{width: "100%"}}>
            <Grid container spacing={1} >
                {/* <Grid item align="center" xs={4}>
                    <img src={song.image_url} height="100%" width="100%" />
                </Grid> */}
                <Grid item align="center" xs={12}>
                    <Typography component="h5" variant="h5">
                        {song.title}
                    </Typography>
                    <Typography color="textSecondary" variant="subtitle1">
                        {song.artist}
                    </Typography>
                    <div>
                        <IconButton onClick={handlePlayPauseButton}>
                            {song.is_playing ? <Pause /> : <PlayArrow />}
                        </IconButton>
                        <IconButton onClick={skipSong}>
                            ({song.votes} / {song.votes_required}) <SkipNext />
                        </IconButton>
                    </div>
                </Grid>
            </Grid>
            <LinearProgress variant="determinate" value={songProgress} />

            
        </Card>
        
    )
}