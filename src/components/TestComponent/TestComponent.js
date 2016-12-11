import React, {Component} from 'react';
const styles = require('./TestComponent.scss');

export default class TestComponent extends Component {
  static propTypes = {
  }

  props = {
  }

  render() {
    return (
      <div className={styles['TestComponent']}>
        TestComponent yeahhh
      </div>
    );
  }
}
