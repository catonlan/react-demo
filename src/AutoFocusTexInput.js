import React from 'react'

export default class AutoFocusTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.blur = this.blur.bind(this)
    }

    componentDidMount() {
        // 通过ref 让input自动获取焦点
        this.textInput.focus();
    }

    // 让input失去焦点
    blur() {
        this.textInput.blur();
    }

    render() {
        return (
            <div>
                <input type="text" ref={(input) => {this.textInput = input;}} />
            </div>
        )
    }
}