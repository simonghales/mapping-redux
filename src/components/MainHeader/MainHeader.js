import React, {Component} from 'react';
const styles = require('./MainHeader.scss');

export default class MainHeader extends Component {

  render() {
    return (
      <div className={styles['MainHeader']}>
        <nav className={styles['nav']}>
          <a href="#" className={styles['navLink']}>
            Visual Mode
          </a>
          <a href="#" className={styles['navLink']}>
            Generate Reports
          </a>
        </nav>
      </div>
    );
  }
}
