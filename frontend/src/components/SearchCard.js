import React from "react";
import { Grid, Typography, Card, Button } from "@material-ui/core";



export default function SearchCard({song}) {
    return(
        <Card align="center" style={{width: "100%"}}>
            <Grid container spacing={4} >
                <Grid item align="center" xs={3}>
                    <Typography component="h5" variant="h5">
                    <img src={song.image_url} height="100%" width="100%" />
                    </Typography>
                </Grid>
                <Grid item align="center" xs={3}>
                    <Typography component="h5" variant="h5">
                        {song.track_name}
                    </Typography>
                </Grid>
                <Grid item align="center" xs={3}>
                    <Typography color="textSecondary" variant="subtitle1">
                        {song.artist_name}
                    </Typography>
                </Grid>
                <Grid item align="center" xs={3}>
                    <Button color="secondary">
                        Add
                    </Button>
                </Grid>
            </Grid>
        </Card>
    )
}