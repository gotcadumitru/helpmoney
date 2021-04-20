import { connect } from 'react-redux';
import { compose } from 'redux';
import { getOneWeek} from '../../redux/app-reducer';
import ItemComponent from './ItemComponent';

let mapStateToProps = (state) =>{
    return {
        week: state.app.oneWeek,
        dayOfWeek:state.app.dayOfWeek
    }
}


export default compose(
    connect(mapStateToProps,{getOneWeek}),
)(ItemComponent);