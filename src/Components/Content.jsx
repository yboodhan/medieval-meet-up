import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';


import Chat from './Chat';
import Error from './Error';
import Profile from './Profile';
import ViewAllMatches from './ViewAllMatches';
import ViewMatchProfile from './ViewMatchProfile';
import Settings from './Settings';

const Content = props => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Profile} />
                <Route path="/chat" component={Chat} />
                <Route path="/matches" component={ViewAllMatches} />
                <Route path="/show" component={ViewMatchProfile} />
                <Route path="/settings" component={Settings} />
                <Route path="*" component={Error} />
            </Switch>
        </Router>
    )
}

export default Content