import React, {Component} from "react";
import RoomJoinPAge from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import Room from "./Room";
import {
    BrowserRouter as Router, 
    Routes, 
    Route,
    useParams,
    useNavigate
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
                    <Route path="/join" element={<RoomJoinPAge />} />
                    <Route path="/create" element={<CreateRoomWrapper />} />
                    <Route path="/room/:code" element={<RoomWrapper />} />
                </Routes>
            </Router>
            )
    }
}

function RoomWrapper() {
    const {code} = useParams();
    return <Room code={code} />
}

function CreateRoomWrapper(){
    const navigate = useNavigate();
    return <CreateRoomPage navigate={navigate} />
}