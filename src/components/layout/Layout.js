import React from 'react';
import { Link } from 'react-router-dom'
import LayoutHeader from './LayoutHeader';
import LayoutContent from './LayoutContent';
import LayoutFooter from './LayoutFooter';
import { Drawer } from 'antd';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import './Layout.scss';

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
    return(
        <div className="app-layout">
          <LayoutHeader 
            showLeftDrawer={this.showLeftDrawer}
            showTopDrawer={this.showTopDrawer}
            direccionObra={this.props.direccionObra}
          />
          <LayoutContent 
            children={this.props.children}
          />
          <LayoutFooter 
            IdObra={this.props.IdObra}
          />
          <Drawer
            placement={this.state.isTopDrawer ? 'top' : 'left'}
            width={this.state.isTopDrawer ? '100%' : '50%'}
            height={this.state.isTopDrawer ? '40%' : '100%'}
            closable={false}
            onClose={this.onCloseDrawer}
            visible={this.state.isVisible}
          >
            <ul>
              <Link to="/obras"><li>OBRAS</li></Link>
            </ul>
          </Drawer>
        </div>
    );
  }
}

export default Layout;