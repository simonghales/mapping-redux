import React, {Component} from 'react';
import { EditorColumn, EditorHeader } from 'components';
const styles = require('./Editor.scss');
const EXAMPLE_DATA = require('../../data/example/example.json');

export default class Editor extends Component {

  renderColumns(columns = EXAMPLE_DATA.columns) {
    let renderedColumns = []; // eslint-disable-line prefer-const

    for (let index = 0, len = columns.length; index < len; index++) {
      const column = columns[index];
      renderedColumns.push(
        <div className={styles['column']}>
          <EditorColumn column={column} />
        </div>
      );
    }

    return renderedColumns;
  }

  render() {
    const {columns} = EXAMPLE_DATA;
    return (
      <div className={styles['Editor']}>
        <EditorHeader columns={columns} />
        <div className={styles['body']}>
          {this.renderColumns()}
        </div>
      </div>
    );
  }
}
