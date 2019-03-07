import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchImagesPaths, saveImagePath, deleteImage } from '../../../redux/images/ImagesActions';
import Images from './Images';

const mapDispatchToProps = dispatch => ({
  imagesActions: bindActionCreators( { fetchImagesPaths, saveImagePath, deleteImage }, dispatch)
});

const mapStateToProps = state => ({
    imagesPaths: state.images.imagesPaths
});

export default connect(mapStateToProps, mapDispatchToProps)(Images);
