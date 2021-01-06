import React, {Component} from 'react';
import UserService from "../../services/userServices/UserService";
class FullUser extends Component {

    state = {user : null};
    userService = new  UserService();
 async componentDidMount() {
        let {id} = this.props;
        const user = await this.userService.user(id);
        this.setState({user})
    }
     render(){
        let {user} = this.state;
        return (
        <div>
            {
                user && <div>{user.name} ,{user.id} ,{user.email}</div>
            }
        </div>
    );
    }
}

export default FullUser;