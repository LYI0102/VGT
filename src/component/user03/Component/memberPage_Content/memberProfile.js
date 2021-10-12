import axios from 'axios';
import React, { Component } from 'react';
import ProfileIndex from '../memberPage_Content/profile/profile_index';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            vgtid:'',
         }
    }
    componentDidMount(){
        axios.defaults.withCredentials = true;
        axios.get("http://localhost:3000/Vgt/vgtserver/apilogin").then((response) => {
            if(response.data.loggedId == true) {
                console.log(response);
                this.setState({
                    vgtid: response.data.user[0].account
                });
            }    
        })


    }

    render() { 
        return ( 
            <div className="container">
               <div className="container">
                    <ProfileIndex  vgtid={this.state.vgtid}/>
                </div>
            </div>
        );
    }
}
 
export default Profile;