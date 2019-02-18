import React, { Component } from 'react';
import { Modal } from 'antd';

//({title, visible, handleOk, handleCancel, content})

class CustomModal extends Component {
  state = {
    visible: false
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  
  handleOk = (e) => {
    this.setState({
      visible: false,
    });
  };
  
  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  };
  
  render() {
    return (
      <Modal
        className="custom-modal"
        title={title}
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
      >
        {content}
      </Modal>
    );
  }
}

export default CustomModal;