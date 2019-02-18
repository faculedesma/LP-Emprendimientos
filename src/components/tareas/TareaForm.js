import React, { Component } from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

class TareaForm extends Component {
  state = {
    titulo: '',
    descripcion: ''
  };

  onChangeTitulo = event => {
    this.setState({
      titulo: event.target.value
    });
  }

  onChangeDescripcion = event => {
    this.setState({
      descripcion: event.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.newTarea(this.state.titulo, this.state.descripcion);
  }

  render() {
    const { titulo, descripcion } = this.state;
    return (
      <form className="tarea-form" onSubmit={this.handleSubmit}>
        <p>Título</p>
        <Input 
          placeholder="Ingrese título"
          value={titulo}
          onChange={this.onChangeTitulo}
        />
        <p>Descripción</p>
        <TextArea
          placeholder="Ingrese descripción"
          value={descripcion}
          onChange={this.onChangeDescripcion} 
          rows={4}
        />
        <p>*La tarea se dara de alta en Estado: Pendiente, Fecha Inicio: Actual y Fecha Fin: -</p>
        <input type="submit" value="Submit"/>
      </form>
    );
}
}

export default TareaForm;