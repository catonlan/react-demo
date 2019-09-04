import React, {Component} from 'react';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '', password: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // 监听用户名和密码两个 input 值的变化

    handleChange(event) {
        const target = event.target;
        this.setState({[target.name]: target.value});
    }

    //表达提交的响应数据

    handleSubmit(event) {
        console.log('login suc cessfully');
        event.preventDefault();
    }

    render() {
        return (
            
        )
    }
}
