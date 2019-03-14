import React from 'react';

const Images = () => {
  return (
    <div>
      {
        this.state.imagesPaths 
          ? this.state.imagesPaths.map(image => {
              //<img src={image.PATH} />
              <p>{image.PATH}</p>
            })
            : <p>Cargando</p> 
      }
    </div>
  );
}

export default Images;