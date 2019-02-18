import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadTareas, newTarea } from '../../redux/tareas/TareasActions';
import Tareas from './Tareas';

const mapDispatchToProps = dispatch => ({
  tareasActions: bindActionCreators( { loadTareas, newTarea }, dispatch)
});

const mapStateToProps = state => ({
  tareas: state.tareas.tareas,
  result: state.tareas.result
});

export default connect(mapStateToProps, mapDispatchToProps)(Tareas);
