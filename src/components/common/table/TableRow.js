import React, { Component } from 'react';
import TareaForm from '../../pages/tareas/TareaForm';
import { Popover, Popconfirm, Drawer } from  'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPencilAlt, 
  faTrashAlt, 
  faEllipsisH, 
  faToggleOff, 
  faToggleOn ,
  faCheck,
  faClock
} from '@fortawesome/free-solid-svg-icons';
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
      isCreateForm
    } = this.props;
    
    const actions = (
      <div className="icon-actions">
        <button onClick={this.showDrawerUpdate}>
          <FontAwesomeIcon icon={faPencilAlt} className="icon-normal" />
        </button>
        <Popconfirm 
          title="Esta seguro de que desea eliminar la tarea?" 
          onConfirm={() => handleDeleteTarea(row.IdTarea)}
          okText="SI" 
          cancelText="NO"
        >
          <button>
            <FontAwesomeIcon icon={faTrashAlt} className="icon-normal" />
          </button>
        </Popconfirm>
        {
          row.Estado === "P"
            ? <FontAwesomeIcon onClick={() => finishTarea(row.IdTarea)}icon={faCheck} className="icon-normal" />
            : <FontAwesomeIcon onClick={() => unfinishTarea(row.IdTarea)} icon={faClock} className="icon-normal" />
        }
      </div>
    );

    return (
      <div>
        <div className="row">
          <div onClick={this.onRowClick}>
            <p>{row.Titulo}</p>
          </div>
          <div>
            <Popover placement="left" content={actions} trigger="click">
              <FontAwesomeIcon icon={faEllipsisH} className="icon-normal" />
            </Popover>
          </div>
        </div>
        <div className={this.state.expandRow ? "row__content" : "row__content hidden"}>
          <p><b>Descripción:</b> {row.Descripcion}</p>
          <p><b>Fecha Inicio:</b> {row.FechaInicio.substring(0,10)}</p>
          <p><b>Fecha Fin:</b> {!row.FechaFin ? "-" : row.FechaFin.substring(0,10)}</p>
          <p><b>Creada por:</b> {row.UsuarioCreacion}</p>
          <p><b>Estado:</b> 
            { 
              row.Estado === "T"
                ? <FontAwesomeIcon icon={faCheck} className="icon-finish" />
                  : <FontAwesomeIcon icon={faClock} className="icon-pending" />
            }
          </p>
        </div>
        <div className="blabla">
          {/* <input type="file" onChange={this.fileSelectedHandler} />
          <button onClick={this.fileUploadHandler}>Upload</button>
          <Images IdTarea={tarea.IdTarea}/> */}
        </div>
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