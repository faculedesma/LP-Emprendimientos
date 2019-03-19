import React from 'react';

const Images =  ({ IdTarea, fetchImagesTarea }) => {
  const imagesPaths = fetchImagesTarea(IdTarea);
  return (
    <div>
      {
        //imagesPaths.map(image => {
        //  <img src={image.PATH} />
        //})
        <p>Cargando</p> 
      }
    </div>
  ); 
}

export default Images;