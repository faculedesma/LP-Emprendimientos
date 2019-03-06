import React, { Component } from 'react';
import { Input, DatePicker  } from 'antd';

const { TextArea } = Input;

class TareaForm extends Component {
  state = {
    titulo: '',
    descripcion: '',
    endDate: '',
    initialDate: ''
  };

  onChangeTitulo = e => {
    this.setState({
      titulo: e.target.value
    });
  }

  onChangeDescripcion = e => {
    this.setState({
      descripcion: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.createTarea(this.state.titulo, this.state.descripcion);
    this.setState({
      titulo: '',
      descripcion: ''
    });
  }

  onChangeDate = (date, dateString) => {
    console.log(date, dateString);
  }

  render() {
    const { titulo, descripcion } = this.state;
    const { isCreateForm } = this.props;
    
    return (
      <form 
        className="tarea-form" 
        onSubmit={this.handleSubmit}>
        { isCreateForm ? <h2>Nueva Tarea</h2> : <h2>Modificar Tarea</h2>}
        <p>Título</p>
        <Input
          required 
          value={titulo}
          onChange={this.onChangeTitulo}
        />
        <p>Descripción</p>
        <TextArea
          required
          value={descripcion}
          onChange={this.onChangeDescripcion} 
          rows={4}
        />
        {
          isCreateForm 
          ? <div className="tarea-form__notes">
              <div>
                <p>*La tarea se dara de alta con:</p> 
              </div>
              <div>
                <span><b>Estado:</b> Pendiente</span>
                <span><b>Fecha Inicio:</b> Actual</span>
                <span><b>Fecha Fin:</b> Indeterminada(-)</span>
              </div>
              <input className="form-submit__button"type="submit" value="CREAR"/> 
            </div>
          : <div className="tarea-form__dates">
              <p>Fecha Inicio</p>
                <DatePicker 
                  onChange={this.onChangeDate} 
                  placeholder="Fecha inicio vieja"
                />
              <p>Fecha Fin</p>
                < DatePicker 
                  onChange={this.onChangeDate} 
                  placeholder="Fecha fin vieja"
                />
              <input className="form-submit__button"type="submit" value="MODIFICAR"/> 
            </div>
        }
      </form>
    );
  }
}

export default TareaForm;