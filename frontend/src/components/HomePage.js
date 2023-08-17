import React, {Component} from "react";
import RoomJoinPAge from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import {
    BrowserRouter as Router, 
    Routes, 
    Route 
    } from "react-router-dom";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Routes>
                    <Route exact path="/" element={<h1>Hi</h1>}></Route> 
                    <Route path="/join" element={<RoomJoinPAge />}/>
                    <Route path="/create" element={<CreateRoomPage />}/>
                </Routes>
            </Router>
            )
    }
}