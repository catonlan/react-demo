import React from 'react'

export default class HiHeil extends React.Component {
    constructor(props) {
        super(props);
        this.timer = null; //普通属性
        this.state = {
            date: new Date()
        }
        this.updateDate = this.updateDate.bind(this);
    }

    componentDidMount() {
        this.timer = setInterval(this.updateDate, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    updateDate() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                <h1>Hello</h1>
                <h1>{this.state.date.toString()}</h1>
            </div>
        )
    }
}
