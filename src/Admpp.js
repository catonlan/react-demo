import React from 'react'


import Modal from './Modal'

class Admpp extends React.Component {
    constructor(props) {
        super(props);

        this.state = { showModal: true}
    }

    // 关闭弹框

    closeModal = () => {
        this.setState({ showModal: false})
    }


    render() {
        return (
            <div>
                <h2>Dashbiard</h2>
                {this.state.showModal && (
                    <Modal onClose={this.closeModal}> Modal Dialog </Modal>
                )}
            </div>
        )
    }
}

export default Admpp;