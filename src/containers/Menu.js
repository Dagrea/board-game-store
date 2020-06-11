import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as accountAction from '../actions/account';
import Menu from '../components/Menu';
import uniqBy from 'lodash/uniqBy';

const mapStateToProps = ({ cart,account }) => ({
  account:account,
  totalPrice: cart.items.reduce((total, game) => total + game.price*game.amount, 0),
  items: uniqBy(cart.items, j => j.product_id),
  count: uniqBy(cart.items, j => j.product_id).reduce((length, game) => length + game.amount, 0),
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(accountAction, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);