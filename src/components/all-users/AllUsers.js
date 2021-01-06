import React, {Component} from 'react';
import UserService from "../../services/userServices/UserService";
import User from "../user/User";
import "./AllUsers.css";
import FullUser from "../full-user/FullUser";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
}    from "react-router-dom";

class AllUsers extends Component {
    userService = new UserService();
    state = {users : []};
    async componentDidMount() {
        let users = await this.userService.users();
        this.setState({users});
    }
    render() {
        let {users} = this.state;
        let {match:{url}} = this.props;
        return (
            <div>
                {
                    users.map(value => <User item = {value} key = {value.id}/>)
                }
                <div className={"all-users-router"}>
                    <Switch>
                        <Route path={`${url}/:id`} render={(props) =>{
                            let {match :{params :{id}}} = props;
                            return <FullUser id = {id} key = {id}/>;
                        }} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default withRouter (AllUsers);