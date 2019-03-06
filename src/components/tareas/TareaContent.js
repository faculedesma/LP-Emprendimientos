import React from 'react';
import { Upload, Button, Icon } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCheck } from '@fortawesome/free-solid-svg-icons';

const fileList = [{
  uid: '-1',
  name: 'xxx.png',
  status: 'done',
  url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
}, {
  uid: '-2',
  name: 'yyy.png',
  status: 'done',
  url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
}];

const props = {
  action: '//jsonplaceholder.typicode.com/posts/',
  listType: 'picture',
  defaultFileList: [...fileList],
};

const props2 = {
  action: '//jsonplaceholder.typicode.com/posts/',
  listType: 'picture',
  defaultFileList: [...fileList],
  className: 'upload-list-inline',
};


const TareaContent = ({ tarea }) => {
  return (
    <div>
      <div className="tareas-container__table__data">
        <p>Descripción: {tarea.Descripcion}</p>
        <p>Fecha Inicio: {tarea.FechaInicio.substring(0,10)}</p>
        <p>Fecha Fin: {tarea.FechaFin === null ? '-' : tarea.FechaFin.substring(0,10)}</p>
        <p>Creada por: {tarea.UsuarioCreacion}</p>
        <p>Estado:
                        {tarea.Estado === "T"
            ? <FontAwesomeIcon icon={faCheck} className="icon-finish" />
            : <FontAwesomeIcon icon={faClock} className="icon-pending" />
          }
        </p>
      </div>
      <div className="tareas-container__table__images">
        <p>Imágenes:</p>
        <Upload {...props}>
          <Button>
            <Icon type="upload" /> Upload
          </Button>
        </Upload>
      </div>
    </div>
  );
}

export default TareaContent;