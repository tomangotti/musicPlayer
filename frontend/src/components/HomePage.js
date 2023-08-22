import React, { useEffect, useState} from "react";
import { Grid, Button, ButtonGroup, Typography} from '@material-ui/core'
import {
    useNavigate,
    Link,
    redirect
    } from "react-router-dom";


// export default class HomePage extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             roomCode: null,
//         }
//     }

//     async componentDidMount() {
//         fetch('/api/user-in-room')
//             .then((res) => res.json())
//             .then((data) => {
//                 console.log(data.code)
//                 this.setState({
//                     roomCode: data.code
//                 });
//                 if(this.state.roomCode){
//                     console.log(this.state.roomCode)
//                     const navigate = useNavigate();
//                     navigate(`/room/${this.state.roomCode}`)
//                 }
//             });
//     }

//     renderHomePage() {
//         return (
//             <Grid container spacing={3}>
//                 <Grid item xs={12} align='center'>
//                     <Typography variant="h3" compact="h3">
//                         House Party
//                     </Typography>
//                 </Grid>
//                 <Grid item xs={12} align='center'>
//                     <ButtonGroup disableElevation variant="contained" color="primary">
//                         <Button color="primary" to="/join" component={Link}>
//                             Join a Room
//                         </Button>
//                         <Button color="secondary" to="/create" component={Link}>
//                             Create a Room
//                         </Button>
//                     </ButtonGroup>
//                 </Grid>
//             </Grid>
//         );
//     }

    

//     render() {
//         return (
//             <Router>
//                 <Routes>
                    
//                     <Route 
//                         exact path="/" 
//                         // render={() => this.state.roomCode ? redirect(`/room/${this.state.roomCode}`) : null }
//                         element={this.renderHomePage()}
//                     />
//                     <Route path="/join" element={<RoomJoinPAge />} />
//                     <Route path="/create" element={<CreateRoomPage />} />
//                     <Route path="/room/:code" element={<Room/>} />
//                 </Routes>
//             </Router>
//             )
//     }
// }




export default function HomePage(){
    const [roomCode, setRoomCode] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/api/user-in-room')
            .then((res) => res.json())
            .then((data) => {
                setRoomCode(data.code)
                if(data.code){
                    navigate(`/room/${data.code}`)
                }
            })
    },[])

    // function renderHomePage() {
    //     // const navigate = useNavigate();
    //     // async function componentDidMount() {
    //     //     fetch('/api/user-in-room')
    //     //         .then((res) => res.json())
    //     //         .then((data) => {
    //     //             setRoomCode(data.code)
                    
    //     //             if(roomCode){
    //     //                 console.log(roomCode)
    //     //                 navigate(`/room/${roomCode}`)
    //     //             }
    //     //         });
    //     // }
    //     return (
    //         <Grid container spacing={3}>
    //             <Grid item xs={12} align='center'>
    //                 <Typography variant="h3" compact="h3">
    //                     House Party
    //                 </Typography>
    //             </Grid>
    //             <Grid item xs={12} align='center'>
    //                 <ButtonGroup disableElevation variant="contained" color="primary">
    //                     <Button color="primary" to="/join" component={Link}>
    //                         Join a Room
    //                     </Button>
    //                     <Button color="secondary" to="/create" component={Link}>
    //                         Create a Room
    //                     </Button>
    //                 </ButtonGroup>
    //             </Grid>
    //         </Grid>
    //     );
    // }

    
    


    return(
        <Grid container spacing={3}>
                <Grid item xs={12} align='center'>
                    <Typography variant="h3" compact="h3">
                        House Party
                    </Typography>
                </Grid>
                <Grid item xs={12} align='center'>
                    <ButtonGroup disableElevation variant="contained" color="primary">
                        <Button color="primary" to="/join" component={Link}>
                            Join a Room
                        </Button>
                        <Button color="secondary" to="/create" component={Link}>
                            Create a Room
                        </Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
    )
}

