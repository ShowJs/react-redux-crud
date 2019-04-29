import React, { Component } from 'react';

const App = () => <Counter />;

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increase = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrease = () => {
    this.setState({ count: this.state.count - 1 });
  };

  zero = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div>
        <div>Count:{this.state.count}</div>
        <button onClick={this.increase}>+</button>
        <button onClick={this.decrease}>-</button>
        <button onClick={this.zero}>0</button>
      </div>
    );
  }
}

export default App;
