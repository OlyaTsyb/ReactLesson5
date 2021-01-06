import React, {Component} from 'react';
import Comment from "../comment/Comment";
import CommentService from "../../services/commentServices/commentService";
import FullComment from "../full-comment/FullComment";
import "./AllComments.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
}from "react-router-dom";


class AllComments extends Component {
    commentService = new CommentService();
    state = {comments : []}
    async componentDidMount(){
        let comments = await this.commentService.comments();
        this.setState({comments})
    }
    render() {
        let {comments} = this.state;
        let {match:{url}} = this.props;
        return (
            <div>
                {
                    comments.map(value => <Comment item = {value} key = {value.id}/>)
                }

                <div className={"app-route-comments"}>
                    <Switch>
                        <Route path={`${url}/:id`} render={(props) =>{
                            let {match :{params :{id}}} = props;
                            return <FullComment id = {id} key = {id}/>
                        }}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default withRouter (AllComments);