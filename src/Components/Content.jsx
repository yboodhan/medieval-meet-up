import React from 'react'
import { BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'


import Profile from './Profile'
import Chat from './Chat'
import Error from './Error'

const Content = props => {
    return (
        <Router>
                <Switch>
                    <Route exact path="/" component={Profile} />
                    <Route path="/chat" component={Chat} />
                    <Route path="*" component={Error} />
                </Switch>
        </Router>
    )
}

export default Content