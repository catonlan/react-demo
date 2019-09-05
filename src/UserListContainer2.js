import React from 'react'
import UserList2 from './UserList2'

export default class UserListContainer2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
        this.handleAddUser = this.handleAddUser.bind(this);
    }

    componentDidMount() {
        var that  = this;
        fetch('/path/to/user-api').then(function (response) { 
            response.json().then(function(data) {
                that.setState({users: data})
            })
         })
    }

    // 新增用户

    handleAddUser(user) {
        var that = this;
        fetch('/path/to/save-user-api', {
            method: 'POST',
            body: JSON.stringify({'username': user})
        }).then(function(response) {
            response.json().then(function(newUser) {
                // 将服务器端返回的新用户添加到state中
                that.setState((preState) => ({users:preState.users.concat([newUser])}))
            })
        })
    }

    render() {
        return (
            // 通过props传递users和handleAddUser 方法
            <UserList2 users= {this.state.users} onAddUser={this.handleAddUser}/>
        )
    }
}