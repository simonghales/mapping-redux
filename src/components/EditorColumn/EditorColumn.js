import React, {Component, PropTypes} from 'react';
import { EditorCard } from 'components';
const styles = require('./EditorColumn.scss');

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
    return (
      <div className={styles['EditorColumn']}>
        <div>
          {this.renderCards()}
        </div>
        <button className={styles['addButton']}>
          Add new card
        </button>
      </div>
    );
  }
}
