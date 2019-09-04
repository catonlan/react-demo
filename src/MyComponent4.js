import React from 'react';

class MyComponent4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[1, 2, 3, 4],
            current: 1
        };
    }
    //  点击每一项时， 将点击项设置为当前选中项，因此需要把点击项作为参数传递

    handleClick(item, event) {
        this.setState({
            current: item
        });
    }

    render() {
        return (
            <ul>
            {this.state.list.map((item) => {
                <li></li>
            })}
            </ul>
        );
    }
}

export default MyComponent4;