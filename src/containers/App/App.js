import React, {Component, PropTypes} from 'react';
const styles = require('./App.scss');

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className={styles['App']}>
        {this.props.children}
      </div>
    );
  }
}
