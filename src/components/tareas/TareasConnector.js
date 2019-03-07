import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTareas, createTarea, deleteTarea } from '../../redux/tareas/TareasActions';
import TareasPage from './TareasPage';

const mapDispatchToProps = dispatch => ({
  tareasActions: bindActionCreators( { fetchTareas, createTarea, deleteTarea }, dispatch)
});

const mapStateToProps = state => ({
  tareas: state.tareas.tareas,
  queryResult: state.tareas.queryResult
});

export default connect(mapStateToProps, mapDispatchToProps)(TareasPage);
