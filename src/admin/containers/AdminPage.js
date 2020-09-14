import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import AdminPage from '../components/AdminPage';
import * as gameActions from '../../actions/games';

const mapStateToProps = ({games}) => ({
	games: games.items
});

const mapDispatchToProps = dispatch => ({
	...bindActionCreators(gameActions,dispatch),
});

export default  connect(
	mapStateToProps,
	mapDispatchToProps
	)(AdminPage);