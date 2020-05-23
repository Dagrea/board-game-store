import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../actions/cart';
import GameCard from '../components/GameCard';

const mapStateToProps = ({ cart }, { id }) => ({
  addedCount: cart.items.reduce((count, game) => count + (game.id === id ? 1 : 0), 0),
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(cartActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(GameCard);