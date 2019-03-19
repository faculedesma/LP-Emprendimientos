import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { 
  fetchTareas,
  fetchImagesTarea, 
  createTarea, 
  deleteTarea, 
  updateTarea,
  finishTarea,
  unfinishTarea  
} from '../../../redux/tareas/TareasActions';
import TareasPage from './TareasPage';

const mapDispatchToProps = dispatch => ({
  tareasActions: bindActionCreators( { 
    fetchTareas, createTarea, deleteTarea, updateTarea, finishTarea, unfinishTarea, fetchImagesTarea 
  }, dispatch)
});

const mapStateToProps = state => ({
  tareas: state.tareas.tareas,
  queryResult: state.tareas.queryResult
});

export default connect(mapStateToProps, mapDispatchToProps)(TareasPage);
