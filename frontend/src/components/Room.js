import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';


// export default class Room extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             votesToSkip: 2,
//             guestCanPause: false,
//             isHost: false,
//         };
//         this.getRoomDetails();
//     }

//     getRoomDetails() {
//         fetch('/api/get-room' + '?code=' + this.props.code)
//             .then((res) => res.json())
//             .then((data) => {
//                 this.setState({
//                     votesToSkip: data.votes_so_skip,
//                     guestCanPause: data.guest_can_pause,
//                     isHost: data.is_host,
//                 })
//             })
//     }

//     render() {
//         const { code } = this.props
//         return <div>
//             <h3>{code}</h3>
//             <p>Votes: {this.state.votesToSkip}</p>
//             <p>Guest can pause: {this.state.guestCanPause.toString()}</p>
//             <p>Host: {this.state.isHost.toString()}</p>
//         </div>
//     };
// }

export default function Room() {
    const [votesToSkip, setVotesToSkip] = useState(2);
    const [guestCanPause, setGuestCanPause] = useState(false);
    const [isHost, setIsHost] = useState(false);

    const { code } = useParams()

    useEffect(() => {
        fetch('/api/get-room' + '?code=' + code)
            .then((res) => res.json())
            .then((data) => {
                    setVotesToSkip(data.votes_so_skip)
                    setGuestCanPause(data.guest_can_pause)
                    setIsHost(data.is_host)
            })
    },[])

    return(
        <div>
            <h3>{code}</h3>
            <p>Votes: {votesToSkip}</p>
            <p>Guest can pause: {guestCanPause.toString()}</p>
            <p>Host: {isHost.toString()}</p>
        </div>
    )
}
