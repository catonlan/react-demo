import React from 'react';
import ErrorBoundary from './ErrorBoundary';

class Adp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
             user: {name: "react"}
        };
    }

    //将user设为null， 模拟异常
    onClick = ()  => {
        this.setState({user: null})
    }

    render() {
        return (
            <div>
                <ErrorBoundary>
                    <Profile user ={this.state.user} />
                    <button onClick={this.onClick}>更新</button>
                </ErrorBoundary>
            </div>
        )
    }
}

const Profile = ({user}) => <div>name: {user.name}</div>


export default Adp;