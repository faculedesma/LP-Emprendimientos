import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrashAlt, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

const TareaHeader = ({ tarea }) => {
  return (
    <div className="tareas-container__table__header">
      <p>{tarea.Titulo}</p>
      <FontAwesomeIcon icon={faEllipsisH} className="icon-normal" />
      {/* <FontAwesomeIcon icon={faPencilAlt} className="icon-normal" />
      <FontAwesomeIcon icon={faTrashAlt} className="icon-normal" /> */}
    </div>
  );
}

export default TareaHeader;