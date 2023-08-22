import React from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";
import RoomJoinPAge from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import Room from "./Room";
import {
    BrowserRouter as Router, 
    Routes, 
    Route
    } from "react-router-dom";


export default function App() {
    return (
        <div className="center" >
            <Router>
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route path="/join" element={<RoomJoinPAge />} />
                    <Route path="/create" element={<CreateRoomPage />} />
                    <Route path="/room/:code" element={<Room/>} />
                </Routes>
            </Router>
        </div>);
}


const appDiv = document.getElementById("app");
render(<App name="tim" />, appDiv)