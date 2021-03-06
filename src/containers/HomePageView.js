import { connect } from 'react-redux'
import HomePage from '../components/HomePage'
import { bookmark } from '../actions'

const mapStateToProps = state => ({
  filter: state.filter,
  activities: state.activities,
})

const mapDispatchToProps = dispatch => ({
  bookmark: id => dispatch(bookmark(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)
