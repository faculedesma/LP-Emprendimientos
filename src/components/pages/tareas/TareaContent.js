import React from 'react';
import { Popover, Popconfirm } from  'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPencilAlt, 
  faTrashAlt, 
  faEllipsisH,
  faCheck,
  faClock
} from '@fortawesome/free-solid-svg-icons';

const TareaContent = ({ row, onRowClick, expandRow, showDrawerUpdate, handleDeleteTarea, finishTarea, unfinishTarea }) => {
  const actions = (
    <div className="icon-actions">
      <button onClick={showDrawerUpdate}>
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
        <div onClick={onRowClick}>
          <p>{row.Titulo}</p>
        </div>
        <div>
          <Popover placement="left" content={actions} trigger="click">
            <FontAwesomeIcon icon={faEllipsisH} className="icon-normal" />
          </Popover>
        </div>
      </div>
      <div className={expandRow ? "row-content" : "row-content hidden"}>
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
        <div className="row-content__images">
          <p><b>Imágenes:</b></p>
          <input type="file" onChange={null} />
          <button onClick={null}>Upload</button>
          {/* <Images Idtarea={row.IdTarea} /> */}
        </div>
      </div>
    </div>
  )
}

export default TareaContent;
