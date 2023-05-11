import { connect } from 'react-redux'
import BizDetails from '../Components/BizDetails'


const mapStateToProps = (state) => {
    return {
        businesses: state.businesses
    }
}

export default connect(mapStateToProps)(BizDetails)
