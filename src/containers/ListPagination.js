import { connect } from 'react-redux';
import TopList from '../components/TopList';
import * as actions from '../redux/actions';


const mapStateToProps = (state) => {
  return {
    list: state.topList.slice(0, state.showNoOfItem)
      .filter(
        item => item.title.toLowerCase().includes(state.search.toLowerCase())
      ),
    moreFetch: state.topList.length > state.showNoOfItem,
    status: state.topListStatus,
    appInfo: state.appInfo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    featchData: () => dispatch(actions.fetchTopList()),
    fetchMoreTopList: () => dispatch(actions.fetchMoreTopList()),
    featchRateinfo: (order) => dispatch(actions.fetchAppDetailInfo(order))
  }
}


const ListPagination = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopList)

export default ListPagination