import React, {Component} from 'react';
import { Editor, MainHeader } from 'components';
const styles = require('./Main.scss');

export default class Main extends Component {
  render() {
    return (
      <div className={styles['Main']}>
        <MainHeader />
        <Editor />
      </div>
    );
  }
}
