import React, {Component, PropTypes} from 'react';
const styles = require('./EditorCard.scss');

export default class EditorCard extends Component {

  static propTypes = {
    card: PropTypes.object.isRequired
  }

  render() {
    const {card} = this.props;
    const {title, description} = card;
    return (
      <div className={styles['EditorCard']}>
        <h3 className={styles['title']}>{title}</h3>
        <p className={styles['description']}>
          {description}
        </p>
      </div>
    );
  }
}
