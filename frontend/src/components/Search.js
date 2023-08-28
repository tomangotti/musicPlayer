import React, { useState } from "react";
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
import SearchCard from "./SearchCard";

export default function Search() {
    const [search, setSearch] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [searchResults, setSearchResults] = useState(null)

    function handleSearch(e) {
        setSearch(e.target.value)
    }

    function sendSearch(){
        const searchOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                song: search
            })
        }
        fetch('/spotify/search', searchOptions)
            .then((res) => {
                if(res.ok){
                    res.json().then((data) => {
                        
                        setSearchResults(data.song_list)
                    })
                }else{
                    console.log('not ok')
                }
            })
    }

    function handleSearchResults(list) {
        const listContainer = list.map((song) => {
            return <SearchCard song={song} />
        })
        return listContainer
    }


    return(
        <Grid container spacing={1} >
                <Grid item xs={12} align="center">
                    <Typography variant="h4" component="h4">
                        Search a Song
                    </Typography>
                </Grid>
                <Grid item xs={12} align="center">
                    <TextField 
                        error={error} 
                        label="Search" 
                        placeholder="Enter a Song Title" 
                        value={search} 
                        helperText={errorMessage}
                        variant="outlined" 
                        onChange={handleSearch} />
                </Grid>
                <Grid item xs={12} align="center">
                    <Button variant="contained" color="primary" onClick={sendSearch}>Search</Button>
                </Grid>
                {searchResults ? handleSearchResults(searchResults) : null}
                
            </Grid>
    )
}