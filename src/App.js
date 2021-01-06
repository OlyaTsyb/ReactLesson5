import React, {Component} from 'react';
import "./App.css";
import AllUsers from "./components/all-users/AllUsers";
import AllPosts from "./components/all-posts/AllPosts";
import AllComments from "./components/all-comments/AllComments";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
}    from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>
                  <div>
                      <div>
                          <Link to={"/users"}>users</Link>
                      </div>
                      <div>
                          <Link to={"/posts"}>posts</Link>
                      </div>
                       <div>
                          <Link to={"/comments"}>comments</Link>
                      </div>
                      <div className={"app-route"}>
                            <Switch>
                                <Route path={"/users"} render = {(props) => {
                                    return <AllUsers/>;
                                }}/>
                                <Route path={"/posts"} render = {() => {
                                    return <AllPosts/>;
                                }}/>
                                <Route path={"/comments"} render = {(props) =>{
                                    return  <AllComments/>;
                                }}/>
                            </Switch>
                      </div>
                  </div>

            </Router>

        );
    }
}
export default App;