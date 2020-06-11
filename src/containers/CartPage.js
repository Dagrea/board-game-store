import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../actions/cart';
import CartPage from '../components/CartPage.jsx';
import uniqBy from 'lodash/uniqBy';

const mapStateToProps = ({ cart }) => ({
  totalPrice: cart.items.reduce((total, game) => total + game.price*game.amount, 0),
  items: uniqBy(cart.items, o => o.product_id),
  count: cart.items.reduce((length, game) => length + game.amount, 0),
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(cartActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartPage);