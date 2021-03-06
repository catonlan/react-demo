import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);

        this.state = { hasError: false}
    }

    componentDidCatch(error, info) {

        // 显示错误UI
        this.setState({hasError: true});

        //同时输出错误日志
        console.log('componentDidCatch----', error, info);
    }

    render() {
        if (this.state.hasError) {
            return <h1>0ops, something went wrong.</h1>
        }

        return this.props.children;
    }
}

export default ErrorBoundary;