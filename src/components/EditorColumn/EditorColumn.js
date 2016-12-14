import React, {Component, PropTypes} from 'react';
import { EditorCard, EditorNewCard } from 'components';
const styles = require('./EditorColumn.scss');
const classNames = require('classnames');

export default class EditorColumn extends Component {

  static propTypes = {
    column: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      newCardOpen: false
    };

    this.addNewCard = this.addNewCard.bind(this);
    this.cancelNewCard = this.cancelNewCard.bind(this);
  }

  addNewCard() {
    this.setState({
      newCardOpen: true
    });
  }

  cancelNewCard() {
    this.setState({
      newCardOpen: false
    });
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
    console.log('my state', this.state);
    const {column} = this.props;
    const {newCardOpen} = this.state;
    const {cards} = column;
    const columnClassNames = classNames([
      styles['EditorColumn'],
      {
        [styles['noCards']]: !cards.length,
        [styles['addingNewCard']]: newCardOpen
      }
    ]);
    return (
      <div className={columnClassNames}>
        <div className={styles['cards']}>
          {this.renderCards()}
        </div>
        <div className={styles['newCard']}>
          <EditorNewCard cancelNewCard={this.cancelNewCard} />
        </div>
        <button className={styles['addButton']} onClick={this.addNewCard}>
          Add new card
        </button>
      </div>
    );
  }
}
