import React, {Component, PropTypes} from 'react';
import { EditorCard, EditorNewCard } from 'components';
const styles = require('./EditorColumn.scss');
const classNames = require('classnames');

export default class EditorColumn extends Component {

  static propTypes = {
    column: PropTypes.object.isRequired
  }

  renderCards() {
    const {column} = this.props;
    const {cards} = column;
    let renderedCards = []; // eslint-disable-line prefer-const

    for (let index = 0, len = cards.length; index < len; index++) {
      const card = cards[index];
      renderedCards.push(
        <div className={styles['card']}>
          <EditorCard card={card} />
        </div>
      );
    }

    return renderedCards;
  }

  render() {
    const {column} = this.props;
    const {cards} = column;
    const columnClassNames = classNames([
      styles['EditorColumn'],
      {
        [styles['noCards']]: !cards.length
      }
    ]);
    return (
      <div className={columnClassNames}>
        <div className={styles['cards']}>
          {this.renderCards()}
        </div>
        <div className={styles['newCard']}>
          <EditorNewCard />
        </div>
        <button className={styles['addButton']}>
          Add new card
        </button>
      </div>
    );
  }
}
