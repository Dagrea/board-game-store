import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../actions/cart';
import Menu from '../components/Menu';
import uniqBy from 'lodash/uniqBy';

const mapStateToProps = ({ cart }) => ({
  totalPrice: cart.items.reduce((total, game) => total + game.price*game.amount, 0),
  items: uniqBy(cart.items, o => o.id),
  count: uniqBy(cart.items, o => o.id).length,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(cartActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);