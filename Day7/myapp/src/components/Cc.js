import React, { Component } from 'react';

class Cc extends Component {
  constructor(props) {
    super(props);
    console.log('1. Constructor');
  }
  componentDidMount() {
    console.log('3. Component Did Mount');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('4. Component Did Update');
    console.log('Prev Props:', prevProps);
    console.log('Prev State:', prevState);
  }
  componentWillUnmount() {
    console.log('5. Component Will Unmount');
  }
  render() {
    console.log('2. Render');
    return (
      <div>
        <h1>Lifecycle Component</h1>
      </div>
    );
  }
}
export default Cc;
