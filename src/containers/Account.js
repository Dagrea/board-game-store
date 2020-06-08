import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as accountAction from '../actions/account';
import Account from '../components/Account';

const mapStateToProps = ({ account }) => ({
  account:account,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(accountAction, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Account);