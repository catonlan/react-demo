import React from 'react';

class MyComponent3 extends React.Component {
    constructor(props){
        super(props);
        this.state = {number: 0};
    }

    // 每点击一次button，state中的number加1
    handleClick(event) {
        const number = ++this.state.number;
        this.setState({
            number : number
        });
    }

    render() {
        return (
            <div>
                <div>{this.state.number}</div>
                {/* 事件属性赋值和this绑定同时 */}
                <button onClick={this.handleClick.bind(this)}> number</button>
            </div>
        )
    }
}

export default MyComponent3;