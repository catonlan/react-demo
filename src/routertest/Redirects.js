import React from 'react'
import {BrowserRouter as Router, Route, Link, Redirect, withRouter, Prompt} from 'react-router-dom'



function AuthExample() {
    return (
        <Router>
            <div>
                <AuthButton/>
                <ul>
                    <li>
                        <Link to="/public" >Public Page</Link>

                    </li>
                    <li>
                        <Link to="/protected" >Protected</Link>
                    </li>
                </ul>
                <Route path="/public" component={Public} />
                <Route path="/login" component={Login} />
                <PrivateRoute path="/protected" component={Protected} testName="abc" />
            </div>
        </Router>
    )
}

const fakeAuth = {
    isAuthenticated: false,
    authenticated(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100);
    },
    signout(cb) {
        this.isAuthenticated = false
        setTimeout(cb, 100)
    }
}

const AuthButton = withRouter(
    ({history}) => fakeAuth.isAuthenticated ? (
        <p>
            welcome!
            <button onClick={() => { fakeAuth.signout(() => history.push("/")) }} >
                Sign out
            </button>
        </p>
    ) : (
        <p>You are not logged in.</p>
    )
)

function PrivateRoute ({component: Component, ...rest}) {
    console.log('privateRouter Component:', Component)
    console.log('privateRouter rest:', rest)
    return(
        <Route {...rest} render={props => fakeAuth.isAuthenticated ? (<Component {...props} />) :
            (
                <Redirect to={{pathname: "/login", state: {from: props.location} }} />
            )
        } />
    )
}

function Public() {
    return (
        <h3>Public</h3>
    )
}

function Protected() {
    return(
        <div>
        <Prompt
        when={fakeAuth.isAuthenticated}
        message="Are you sure you want to leave?"
        />
        <h3>Protected</h3>
        </div>
    ) 
}

class Login extends React.Component {
    state = {redirectToReferrer:false};

    login = () => {
        fakeAuth.authenticated(() => {
            this.setState({redirectToReferrer: true})
        })
    }

    render() {
        console.log('login props:', this.props)
        let {from} = this.props.location.state || {from : {pathname: "/"}}
        let {redirectToReferrer} = this.state

        if (redirectToReferrer) {return <Redirect to={from} />}

        return (
            <div>
                <p>You must log in to view the page at {from.pathname}</p>
                <button onClick={this.login}>log in</button>
            </div>
        )
    }
}




export default AuthExample;