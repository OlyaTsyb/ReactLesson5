import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter,
    Link
}    from "react-router-dom";


class Post extends Component {
    render() {
        let {item,match:{url}} = this.props;

        return (
            <div>

                {item.id} -{item.title} <Link to={`${url}/${item.id}`}>go to post</Link>


            </div>
        );
    }
}

export default withRouter (Post);