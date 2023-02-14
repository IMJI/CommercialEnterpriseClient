import React from 'react';
import classes from './DataTable.module.css';
import Table from './Table';
import ToolBar from './ToolBar';

function DataTable() {
    return (
        <div className={classes.dataTable}>
            <ToolBar />
            <Table />
        </div>
    );
}

export default DataTable;