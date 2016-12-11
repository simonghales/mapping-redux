import React, {Component, PropTypes} from 'react';
const styles = require('./EditorCard.scss');
const classNames = require('classnames');

export default class EditorCard extends Component {

  static propTypes = {
    card: PropTypes.object.isRequired
  }

  render() {
    const {card} = this.props;
    const {title, description} = card;
    const cardClasses = classNames([
      styles['EditorCard'],
      {
        [styles['noDescription']]: !description
      }
    ]);
    return (
      <div className={cardClasses}>
        <h3 className={styles['title']}>{title}</h3>
        <p className={styles['description']}>
          {description}
        </p>
      </div>
    );
  }
}
