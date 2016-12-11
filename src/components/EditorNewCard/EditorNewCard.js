import React, {Component} from 'react';
const styles = require('./EditorNewCard.scss');

export default class EditorNewCard extends Component {

  render() {
    return (
      <div className={styles['EditorNewCard']}>
        <textarea placeholder="Enter a title"></textarea>
      </div>
    );
  }
}
