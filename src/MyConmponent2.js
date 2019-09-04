import React from 'react';

class MyComponent2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {number: 0};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        const number = ++this.state.number;
        this.setState({
            number: number
        });
    }

    render() {
        return (
            <div>
                <div>{this.state.number}</div>
                <button onClick={this.handleClick}>
                   like
                </button>
            </div>
        )
    }
}


export default MyComponent2;