import React from 'react';
import { Popover, Popconfirm } from  'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPencilAlt, 
  faTrashAlt, 
  faEllipsisH, 
  faToggleOff, 
  faToggleOn 
} from '@fortawesome/free-solid-svg-icons';

const TareaHeader = ({ tarea, deleteTarea, showDrawerUpdate }) => {
  const actions = (
    <div className="icon-actions">
      <button onClick={showDrawerUpdate}>
        <FontAwesomeIcon icon={faPencilAlt} className="icon-normal" />
      </button>
      <Popconfirm 
        title="Esta seguro de que desea eliminar la tarea?" 
        onConfirm={() => { deleteTarea(tarea.IdTarea)}}
        okText="SI" 
        cancelText="NO"
      >
        <button>
          <FontAwesomeIcon icon={faTrashAlt} className="icon-normal" />
        </button>
      </Popconfirm>
      {
        tarea.Estado === "T"
          ? <FontAwesomeIcon icon={faToggleOff} className="icon-normal" />
          : <FontAwesomeIcon icon={faToggleOn} className="icon-normal" />
      }
    </div>
  );

  return (
    <div className="tareas-container__table__header">
      <p>{tarea.Titulo}</p>
      <Popover placement="left" content={actions} trigger="click">
          <FontAwesomeIcon icon={faEllipsisH} className="icon-normal" />
      </Popover>
    </div>
  );
};

export default TareaHeader;