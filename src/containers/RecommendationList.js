import { connect } from 'react-redux';
import { filterFunction } from '../utils';
import Recommendation from '../components/Recommendation';
import * as actions from '../redux/actions';


const mapStateToProps = (state) => {
  return {
    list: state.recommandList.filter(
      filterFunction(state.search.toLowerCase())
    ),
    status: state.recommandListStatus,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    featchData: () => dispatch(actions.fetchRecommendationList())
  }
}


const RecommendationList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Recommendation)

export default RecommendationList