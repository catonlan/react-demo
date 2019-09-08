import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'


function Parameters () {
    return (
        <Router>
        <div>
            <h2>Accounts</h2>
            <ul>
                <li>
                    <Link to="/netflix">Netflix</Link>
                </li>
                <li>
                    <Link to="/zillow-group">zillow-group</Link>
                </li>
                <li>
                    <Link to="/yahoo">Yahoo</Link>
                </li>
                <li>
                    <Link to="/modus-create">Modus-create</Link>
                </li>
            </ul>

            <Route path="/:id" component={Child} />
            <Route path="/order/:direction" component={ComponentWithRegex} />
        </div>
        </Router>
    )
}

function Child({match}) {
    return (
        <div>
            <h3>ID: {match.params.id}</h3>
        </div>

    )
}

function ComponentWithRegex ({match}) {
    return(
        <div>
            <h3>Only asc/desc are allowed: {match.params.direction}</h3>
        </div>
    )
}

export default Parameters;