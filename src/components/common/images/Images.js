import React, { Component } from 'react';

class Images extends Component {
  state = {
    imagesPaths: null
  }

  componentDidMount = () => {
    this.props.imagesActions.fetchImagesPaths(this.props.IdTarea);
  };

  static getDerivedStateFromProps = (nextProps, prevState) => {
    if(prevState.imagesPaths != nextProps.imagesPaths) {
      return {
        imagesPaths: nextProps.imagesPaths
      };
    }

    return null;
  };
  
  render() {
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
}

export default Images;