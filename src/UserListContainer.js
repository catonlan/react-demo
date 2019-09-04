import React from 'react'
import UserList from './UserList'

class UserListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        var that = this;
        fetch('/path/to/user-api').then(function(response) {
            //将响应内容解析成json
            response.json().then(function(data) {
                that.setState({users: data})
            }).catch(function(err) {
                //若解析失败(响应内容非json格式),则捕获错误
                console.log(err);
            });
        })
    }

    render() {
        return (
            //  通过props传递users
            <UserList users={this.state.users} />
        )
    }
}

export default UserListContainer;