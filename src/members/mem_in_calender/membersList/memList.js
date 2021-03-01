import React, { Component } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';


import User from '../member/member';
import FullUser from '../FullUser/FullUser';

class UserList extends Component {
    state = {
        users: [],
        selectedUserId: null,
        selectedUser:null
    }

    componentDidMount () {
        axios.get( 'https://my-json-server.typicode.com/anilkumarnlkmr/full/members' )
            .then( response => {
                const users = response.data.slice(0, 10);
                this.setState({users: users});
                 console.log( response );
            } );
    }

    postSelectedHandler = (id) => {
        const userObject=this.state.users.find(user=> user.id === id)
        console.log(userObject,id);

        this.setState({selectedUserId: id, selectedUser:userObject});
    }

    render () {
        
        const users = this.state.users.map(user => {
            return <Button variant="contained" color="secondary"><User 
                key={user.id} 
                title={user.real_name}
                clicked={() => this.postSelectedHandler(user.id)} /></Button>;
        });

        return (
            <div>
                <section className="Posts">
                    {users}
                </section>
                <section >
                    <Button>
                    <FullUser id={this.state.selectedUserId} user={this.state.selectedUser}/>
                    </Button>
                </section>
                {/* <div>
                    {
                        this.state.selectedUser && this.state.selectedUser.activity_periods.map(activity=><p>
                            <span>
                                {activity.start_time}
                            </span>
                            <span>
                                {activity.end_time}
                            </span>
                        </p>)
                    }
                </div> */}
            </div>
        );
    }
}

export default UserList;