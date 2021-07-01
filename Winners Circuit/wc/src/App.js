import React from 'react';
import {withAuth0} from "@auth0/auth0-react";
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import ProtectedRoute from "./Authentication/protected-route";
import Loading from "./pages/MiscComponents/Loading";
import MainPage from "./pages/Homepage/homepage";
import NotFoundPage from "./pages/404/404";
import FeedComponent from "./pages/FeedComponent/FeedComponent";
import RegisterComponent from "./pages/RegisterComponent/RegisterComponent";

class App extends React.Component {

    render() {

        const { isLoading } = this.props.auth0;

        if (isLoading) {

            return(<Loading />)

        }

        return (

            <Router>
                <Switch>
                    <Route exact path = '/' component = {MainPage} />
                    <Route exact path = '/404' component = {NotFoundPage} />
                    <ProtectedRoute exact path = '/feed' component = {FeedComponent} />
                    <Route exact path = '/register' component = {RegisterComponent} />
                    <Route exact path = '/continue' component = {NotFoundPage}/>
                    <Redirect to = '/404'/>
                </Switch>
            </Router>

        )

    }

}

export default withAuth0(App);
