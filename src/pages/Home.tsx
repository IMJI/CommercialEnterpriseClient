import React from 'react';
import Pagination from '../components/pagination/Pagination';
import DataTable from '../components/table/DataTable';
import classes from './Home.module.css';

function Home() {
    return (
        <div className={classes.homePage}>
            <div className={classes.container}>
                <DataTable />
            </div>
            <Pagination />
        </div>
    );
}

export default Home;