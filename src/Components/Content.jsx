import React from 'react'
import { BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'


import Profile from './Profile'
import Chat from './Chat'
import Error from './Error'

const Content = props => {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Profile} />
                    {/* <Route path="/dragon" component={Dragon} />
                    <Route path="/farquad" component={Farquad} /> */}
                    <Route path="/chat" component={Chat} />
                    <Route path="*" component={Error} />
                </Switch>
            </div>
        </Router>
    )
}

export default Content