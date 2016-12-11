import React, {Component, PropTypes} from 'react';
const styles = require('./<%= pascalEntityName %>.scss');

export default class <%= pascalEntityName %> extends Component {
  static propTypes = {
  }

  props = {
  }

  render() {
    return (
      <div className={styles['<%= pascalEntityName %>']}>
        <%= pascalEntityName %>
      </div>
    );
  }
}
