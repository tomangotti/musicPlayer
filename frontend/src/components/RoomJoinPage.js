import React, {Component} from "react";
import {TextField, Button, Grid, Typography} from "@material-ui/core"
import {Link} from "react-router-dom"

export default class RoomJoinPAge extends Component {
    constructor(props) {
        super(props);

        this.state = {
            roomCode: "",
            error: "",
        }
    }

    render() {
        return (
            <Grid container spacing={1} alignItems="center">
                <Grid item xs={12}>
                    <Typography variant="h4" component="h4">
                        Join a Room
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        error={this.state.error} 
                        label="Code" 
                        placeholder="Enter a Room Code" 
                        value={this.state.roomCode} 
                        helperTest={this.state.error} 
                        variant="outlined" />

                        
                </Grid>

            </Grid>
            )
    }
}