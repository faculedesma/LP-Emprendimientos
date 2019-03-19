import React from 'react';
import LayoutHeader from './LayoutHeader';
import LayoutContent from './LayoutContent';
import { Drawer } from 'antd';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import './Layout.scss';
import LayoutFooter from './LayoutFooter';

const tableType = {
  TAREAS: 'TAREAS',
  REUNIONES: 'REUNIONES',
  MATERIALES: 'MATERIALES'
};

class Layout extends React.Component {
  state = {
    isVisible: false,
    isTopDrawer: false
  };

  showLeftDrawer = () => {
    this.setState({
      isTopDrawer: false,
      isVisible: true
    });
  };

  showTopDrawer = () => {
    this.setState({
      isTopDrawer: true,
      isVisible: true
    });
  };

  onCloseDrawer = () => {
    this.setState({
      isVisible: false
    });
  };

  render() {
    return (
        <div className="app-layout">
          <LayoutHeader 
            showLeftDrawer={this.showLeftDrawer}
            showTopDrawer={this.showTopDrawer}
          />
          <LayoutContent 
            children={this.props.children} 
          />
          <LayoutFooter />
          <Drawer
            placement={this.state.isTopDrawer ? 'top' : 'left'}
            width={this.state.isTopDrawer ? '100%' : '50%'}
            height={this.state.isTopDrawer ? '40%' : '100%'}
            closable={false}
            onClose={this.onCloseDrawer}
            visible={this.state.isVisible}
          >
          </Drawer>
        </div>
    );
  }
}

export default Layout;