import { connect } from 'react-redux'
import Listings from '../Components/Listings'
import { addBusiness, removeBusiness } from '../Redux/actions'


const mapStateToProps = (state) => {
    return {
        businesses: state.businesses,
        user: state.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addBusiness: (business) => dispatch(addBusiness(business)),
        removeBusiness: (index) => dispatch(removeBusiness(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Listings)
