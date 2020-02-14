import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';


import Chat from './Chat';
import Error from './Error';
import Profile from './Profile';
import ViewAllMatches from './ViewAllMatches';
import Settings from './Settings';

import Show1 from './Show1'

const Content = props => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Profile} />
                <Route path="/chat" component={Chat} />
                <Route path="/matches" component={ViewAllMatches} />
                <Route path="/settings" component={Settings} />
                {/* all show pages */}
                <Route path="/1" component={Show1} />
                <Route path="/2" component={Settings} />
                <Route path="/3" component={Settings} />
                <Route path="/4" component={Settings} />
                <Route path="/5" component={Settings} />
                <Route path="/6" component={Settings} />
                <Route path="*" component={Error} />
            </Switch>
        </Router>
    )
}

export default Content