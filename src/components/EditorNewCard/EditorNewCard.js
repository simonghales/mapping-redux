import React, {Component, PropTypes} from 'react';
const styles = require('./EditorNewCard.scss');

export default class EditorNewCard extends Component {

  static propTypes = {
    cancelNewCard: PropTypes.func.isRequired
  }

  render() {
    const {cancelNewCard} = this.props;
    return (
      <div className={styles['EditorNewCard']}>
        <div className={styles['card']}>
          <textarea placeholder="Enter a title"></textarea>
        </div>
        <div className={styles['options']}>
          <button className={[styles['addButton'], styles['option']].join(' ')}>
            Add
          </button>
          <button className={[styles['cancelButton'], styles['option']].join(' ')}
                  onClick={cancelNewCard}>
            x
          </button>
        </div>
      </div>
    );
  }
}
