import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { sendData } from '../../redux/app-reducer';
import NewDay from './NewDay';

let mapStateToProps = (state) =>{
    return {
        
        
    }
}


export default compose(
    withRouter,
    connect(mapStateToProps,{sendData}),
)(NewDay);