import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';


import Chat from './Chat';
import Error from './Error';
import Profile from './Profile';
import ViewAllMatches from './ViewAllMatches';
import Settings from './Settings';

import Show1 from './Show1';
import Show2 from './Show2';
import Show3 from './Show3';
import Show4 from './Show4';
import Show5 from './Show5';


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
                <Route path="/2" component={Show2} />
                <Route path="/3" component={Show3} />
                <Route path="/4" component={Show4} />
                <Route path="/5" component={Show5} />
                <Route path="*" component={Error} />
            </Switch>
        </Router>
    )
}

export default Content