import React, { Component } from 'react';
import TableRow from '../table/TableRow';
import './Table.scss';

class Table extends Component {
  render() {
    const {
      tableType,
      content
    } = this.props;

    return (
      <div className="table">
        {
          content.map(row => {
            return (
              <TableRow 
                tableType={tableType}
                openUpdateDrawer={this.props.openUpdateDrawer}
                row={row}
              />
            );
          })
        }
      </div>
    );
  }
}

export default Table;