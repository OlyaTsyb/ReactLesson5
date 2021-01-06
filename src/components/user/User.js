import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter,
    Link
}    from "react-router-dom";
class User extends Component {

    render() {
        let {item, match: {url}} = this.props;
        console.log(this.props);
        return (
            <div>
                {item.name} - <Link to={`${url}/${item.id}`}>details</Link>
            </div>
        );
    }
}

export default withRouter (User);