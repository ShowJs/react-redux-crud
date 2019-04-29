import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increase, decrease } from './actions';

class App extends Component {
  render() {
    const props = this.props;

    return (
      <div>
        <div>Count:{props.value}</div>
        <button onClick={props.increase}>+</button>
        <button onClick={props.decrease}>-</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({ value: state.count.value });

// const mapDispatchToProps = dispatch => ({
//   increase: () => dispatch(increase()),
//   decrease: () => dispatch(decrease())
// });

export default connect(
  mapStateToProps,
  { increase, decrease }
)(App);
