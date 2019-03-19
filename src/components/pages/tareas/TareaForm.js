import React, { Component } from 'react';
import { Input  } from 'antd';

const { TextArea } = Input;

class TareaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Titulo: props.isCreateForm ? '' : props.tarea.Titulo,
      Descripcion: props.isCreateForm ? '' : props.tarea.Descripcion
    };
  }

  onChangeTitulo = e => {
    this.setState({
      Titulo: e.target.value
    });
  }

  onChangeDescripcion = e => {
    this.setState({
      Descripcion: e.target.value
    });
  }

  handleSubmitCreate = e => {
    e.preventDefault();
    this.props.createTarea(this.state.Titulo, this.state.Descripcion);
    this.setState({
      Titulo: '',
      Descripcion: ''
    });
  }

  handleSubmitUpdate = e => {
    e.preventDefault();
    const tarea = {
      IdTarea: this.props.tarea.IdTarea,
      Titulo: this.state.Titulo,
      Descripcion: this.state.Descripcion,
    };
    this.props.updateTarea(tarea);
    this.setState({
      Titulo: '',
      Descripcion: ''
    });
    this.props.onCloseDrawer();
  }


  render() {
    const { Titulo, Descripcion } = this.state;
    const { isCreateForm } = this.props;

    return (
      <form 
        className="tarea-form" 
        onSubmit={isCreateForm ? this.handleSubmitCreate : this.handleSubmitUpdate}>
        { isCreateForm ? <h2>Nueva Tarea</h2> : <h2>Modificar Tarea</h2>}
        <p>Título</p>
        <Input
          required 
          value={Titulo}
          onChange={this.onChangeTitulo}
        />
        <p>Descripción</p>
        <TextArea
          required
          value={Descripcion}
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
          : <div className="tarea-form__notes">
              <div>
                <p>*Fechas de la tarea:</p> 
              </div>
              <div>
                <span><b>Fecha Inicio:</b> Fecha en la que se creó la tarea. No se puede modificar.</span>
                <span><b>Fecha Fin:</b> Se modifica al cambiar el Estado de la tarea.</span>
              </div>
              <input className="form-submit__button"type="submit" value="MODIFICAR"/> 
            </div>
        }
      </form>
    );
  }
}

export default TareaForm;