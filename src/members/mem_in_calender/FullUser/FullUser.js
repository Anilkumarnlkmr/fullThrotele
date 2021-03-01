import React, { Component } from 'react';

import axios from 'axios';

class FullUser extends Component {
    state={
        loadeduser: ""
    }
    componentDidMount(){
        if(this.props.id){
            if(!this.state.loadeduser ||(this.state.loadeduser && this.loadeduser.id !== this.props.id)){
                axios.get('https://my-json-server.typicode.com/anilkumarnlkmr/full/members/'+this.props.id)
                .then(response =>{
                    this.setState({loadeduser:response.data});
                    //console.log(response);
                });
            }
        }
    }
    render() {
        // let user=<p>Please Select User</p>;
        // // if(this.props.id){
        // //      user=<p>loading.......</p>;
        // // }
        // if(this.state.loadeduser)
        // {
        // user=(    <div>
        //         {console.log(this.props.id)}
        //         <h1>{this.state.loadeduser.tz}</h1>
        //     </div>);
        // }
        // return user;
        return (
            <div>
                   {this.props.user && <h1>{ this.props.user.tz}</h1> }

                    {
                        this.props.user && this.props.user.activity_periods.map((activity,index)=>
                        <p key={index}>
                            <span>
                                {activity.start_time}
                            </span>
                            <span>
                                {activity.end_time}
                            </span>
                        </p>)
                    }
                </div>
        )
    }
}
export default FullUser;