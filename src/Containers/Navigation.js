import { connect } from 'react-redux'
import Navigation from '../Components/Navigation'
import { addBusiness, removeBusiness, removeUser } from '../Redux/actions'


const mapStateToProps = (state) => {
    return {
        businesses: state.businesses,
        user: state.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addBusiness: (business) => dispatch(addBusiness(business)),
        removeBusiness: (index) => dispatch(removeBusiness(index)),
        removeUser: () => dispatch(removeUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
