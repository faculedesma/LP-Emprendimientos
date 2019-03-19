import React, { Component } from 'react';
import TareaForm from '../../pages/tareas/TareaForm';
import TareaContent from '../../pages/tareas/TareaContent';
import { Drawer } from  'antd';
import './Table.scss';

class TableRow extends Component {
  state = {
    expandRow: false,
    isVisible: false
  };
  
  onRowClick = () => {
    this.setState({
      expandRow: !this.state.expandRow
    });
  };

  showDrawerUpdate = () => {
    this.setState({
      isVisible: true
    });
  };

  onCloseDrawer= () => {
    this.setState({
      isVisible: false,
    });
  };
  
  render() {
    const {
      tableType,
      row,
      handleDeleteTarea,
      handleUpdateTarea,
      finishTarea,
      unfinishTarea,
      fetchImagesTarea,
      isCreateForm
    } = this.props;

    return (
      <div>
        <TareaContent 
          row={row}
          onRowClick={this.onRowClick}
          expandRow={this.state.expandRow}
          showDrawerUpdate={this.showDrawerUpdate}
          handleDeleteTarea={handleDeleteTarea}
          finishTarea={finishTarea}
          unfinishTarea={unfinishTarea}
        />
        <Drawer
          placement="right"
          width="100%"
          className="form-drawer"
          closable={true}
          onClose={this.onCloseDrawer}
          visible={this.state.isVisible}
        >
          <TareaForm 
            isCreateForm={isCreateForm}
            updateTarea={handleUpdateTarea}
            onCloseDrawer={this.onCloseDrawer}
            tarea={row}
          />
        </Drawer>
      </div>
    );
  }
}

export default TableRow;