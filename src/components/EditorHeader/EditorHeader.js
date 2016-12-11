import React, {Component, PropTypes} from 'react';
const styles = require('./EditorHeader.scss');

export default class EditorHeader extends Component {

  static propTypes = {
    columns: PropTypes.object.isRequired
  }

  renderColumns() {
    const {columns} = this.props;
    let renderedColumns = []; // eslint-disable-line prefer-const

    for (let index = 0, len = columns.length; index < len; index++) {
      const column = columns[index];
      const {label} = column;
      renderedColumns.push(
        <div className={styles['column']}>
          {label}
        </div>
      );
    }

    return renderedColumns;
  }

  render() {
    return (
      <header className={styles['EditorHeader']}>
        {this.renderColumns()}
        <div className={styles['addNewWrapper']}>
          <button className={styles['addNew']}>
            Add new column
          </button>
        </div>
      </header>
    );
  }
}
