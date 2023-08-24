import React, { useState } from "react";
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
    const [background, setBackground] = useState("")

    function handleBackGroundImage(url) {
        console.log(url)
        setBackground(url)
    }


    return (
        <div className="center" style={{backgroundImage: `url(${background})`}}>
            <Router>
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route path="/join" element={<RoomJoinPAge />} />
                    <Route path="/create" element={<CreateRoomPage />} />
                    <Route path="/room/:code" element={<Room handleBackGroundImage={handleBackGroundImage}/>} />
                </Routes>
            </Router>
        </div>);
}


const appDiv = document.getElementById("app");
render(<App name="tim" />, appDiv)