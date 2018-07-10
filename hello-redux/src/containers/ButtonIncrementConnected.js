import { connect } from 'react-redux';
import { ButtonIncrement } from '../components/ButtonIncrement';
import { increment } from '../actions';
import { selectCount } from '../selectors';

const mapStateToProps = (state, {index}) => ({
  count: selectCount(state, index),
});

const mapDispatchToProps = (dispatch, {index}) => ({
  increment: () => dispatch(increment(index)),
});

const enhance = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export const ButtonIncrementConnected = enhance(ButtonIncrement);