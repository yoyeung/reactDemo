import { connect } from 'react-redux';
import Search from '../components/Search';
import * as actions from '../redux/actions';


// const mapStateToProps = (state) => {
//   return {
//     list: state.recommandList
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    filter: (event) => dispatch(actions.searchTopList(event))
  }
}


const SearchBox = connect(
  null,
  mapDispatchToProps
)(Search)

export default SearchBox