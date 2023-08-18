import React, {Component} from 'react';
import { useParams } from 'react-router-dom';


export default class Room extends Component {
    constructor(props) {
        super(props);
        this.state = {
            votesToSkip: 2,
            guestCanPause: false,
            isHost: false,
        };
        this.getRoomDetails();
    }

    getRoomDetails() {
        fetch('/api/get-room' + '?code=' + this.props.code)
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    votesToSkip: data.votes_so_skip,
                    guestCanPause: data.guest_can_pause,
                    isHost: data.is_host,
                })
            })
    }

    render() {
        const { code } = this.props
        return <div>
            <h3>{code}</h3>
            <p>Votes: {this.state.votesToSkip}</p>
            <p>Guest can pause: {this.state.guestCanPause.toString()}</p>
            <p>Host: {this.state.isHost.toString()}</p>
        </div>
    };
}
