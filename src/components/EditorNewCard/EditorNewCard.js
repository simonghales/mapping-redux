import React, {Component, PropTypes} from 'react';
const styles = require('./EditorNewCard.scss');

export default class EditorNewCard extends Component {

  static propTypes = {
    cancelNewCard: PropTypes.func.isRequired,
    createCard: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
    this.createCard = this.createCard.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  createCard() {
    const {
      createCard
    } = this.props;
    const {
      title
    } = this.state;
    if (title) {
      createCard(title);
    }
    this.resetCard();
  }

  handleTitleChange(event) {
    this.setState({
      title: event.target.value
    });
  }

  resetCard() {
    this.setState({
      title: ''
    });
  }

  render() {
    const {
      cancelNewCard,
    } = this.props;
    const {
      title
    } = this.state;
    return (
      <div className={styles['EditorNewCard']}>
        <div className={styles['card']}>
          <textarea placeholder="Enter a title" value={title} onChange={this.handleTitleChange}></textarea>
        </div>
        <div className={styles['options']}>
          <button className={[styles['addButton'], styles['option']].join(' ')}
                  onClick={this.createCard}>
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
