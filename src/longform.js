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
            <form action="" onSubmit={this.handleSubmit}>
                <label htmlFor="">
                    用户名：
                    {/* 通过value 设置input显示内容， 用过onChange 监听value的变化 */}

                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                </label>

                <label htmlFor="">
                    密码:
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                </label>
                <input type="submit" value="登录" />
            </form>
        )
    }
}


export default LoginForm;