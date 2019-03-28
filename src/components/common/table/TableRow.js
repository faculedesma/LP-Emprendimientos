import React, { Component } from 'react';
import TareaForm from '../../pages/tareas/TareaForm';
import TareaContent from '../../pages/tareas/TareaContent';
import MaterialForm from '../../pages/materiales/MaterialForm';
import MaterialContent from '../../pages/materiales/MaterialContent';
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
      isCreateForm,
      handleDeleteMaterial,
      handleUpdateMaterial,
      deliveredMaterial,
      pendentMaterial,
      isAddForm
    } = this.props;

    return (
      <div>
        {
          tableType === "TAREAS"
            ?
              <TareaContent 
                row={row}
                onRowClick={this.onRowClick}
                expandRow={this.state.expandRow}
                showDrawerUpdate={this.showDrawerUpdate}
                handleDeleteTarea={handleDeleteTarea}
                finishTarea={finishTarea}
                unfinishTarea={unfinishTarea}
              />
            :
              <MaterialContent 
                row={row}
                onRowClick={this.onRowClick}
                expandRow={this.state.expandRow}
                showDrawerUpdate={this.showDrawerUpdate}
                handleDeleteMaterial={handleDeleteMaterial}
                deliveredMaterial={deliveredMaterial}
                pendentMaterial={pendentMaterial}
              />
        }
        <Drawer
          placement="right"
          width="100%"
          className="form-drawer"
          closable={true}
          onClose={this.onCloseDrawer}
          visible={this.state.isVisible}
        >
          {
            tableType === "TAREAS"
              ? <TareaForm 
                  isCreateForm={isCreateForm}
                  updateTarea={handleUpdateTarea}
                  onCloseDrawer={this.onCloseDrawer}
                  tarea={row}
                />
              : <MaterialForm 
                  isAddForm={isAddForm}
                  updateMaterial={handleUpdateMaterial}
                  onCloseDrawer={this.onCloseDrawer}
                  material={row}
                />
          }  
        </Drawer>
      </div>
    );
  }
}

export default TableRow;