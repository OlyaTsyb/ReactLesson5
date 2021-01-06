import React, {Component} from 'react';
import PostService from "../../services/postServices/PostService";
import Post from "../post/Post";
import FullPost from "../full-post/FullPost";
import "./AllPosts.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
}from "react-router-dom";


class AllPosts extends Component {
    postService = new PostService();
    state = {posts :[]};
    async componentDidMount(){
        let posts = await this.postService.posts();
            this.setState({posts});
    }
    render() {
        let {posts} = this.state;
        let {match:{url}} = this.props;
        console.log(this.props)
        return (
            <div>
                {
                    posts.map(value => <Post item = {value} key = {value.id}/>)
                }
                <div className={"app-route-post"}>
                    <Switch>
                        <Route path={`${url}/:id`} render={(props)=>{
                            console.log(props)
                            let {match:{params:{id}}} = props;
                            return <FullPost id = {id} key = {id}/>
                        }}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default withRouter (AllPosts);