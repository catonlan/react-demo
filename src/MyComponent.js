import React from 'react';

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { number: 0};
    }

    //每点击一次button， state中的number增加1
    handleClick(event) {
        const number = this.state.number++;
        this.setState({
            number: number
        });
    }

    render() {
        return(
            <div>
                <div>{this.state.number}</div>
                <button onClick={(event) => {this.handleClick(event);}}>
                click
                </button>
            </div>
        )
    }
}

export default MyComponent;