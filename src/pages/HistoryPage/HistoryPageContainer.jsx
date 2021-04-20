import { connect } from 'react-redux';
import { compose } from 'redux';
import { getWeeks} from '../../redux/app-reducer';
import History from './HistoryPage';

let mapStateToProps = (state) =>{
    return {
        weeks: state.app.weeks,
        
    }
}


export default compose(
    connect(mapStateToProps,{getWeeks}),
)(History);