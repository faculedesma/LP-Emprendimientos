import React from 'react';

const Obra = obra => {
  return(
    <div className="obras-page__content">
      <p><b>Nombre:</b>{obra.obra.Obra}</p>
      <p><b>Dirección:</b>{obra.obra.Direccion}</p>
    </div>
  );
}

export default Obra;