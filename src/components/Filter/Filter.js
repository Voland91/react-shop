import React from 'react';
import styles from './Filter.module.css'

const Filter = ({ searchFn, clearFn, value, filterFn }) =>
    (
        <div className={styles.filter}>
            <div className={styles.filterHeader}>
                <h4>Search</h4>
                <button href="#" className={styles.clear} onClick={clearFn}>Clear</button>
            </div>
            <div>
                <input
                    type="text"
                    placeholder="search..."
                    onChange={searchFn}
                    value={value}
                />
            </div>
            <h4>Manufacturer</h4>
            <div>
                <div>
                    <input type="radio" name="manufacturere" id="all" value="" onChange={filterFn} defaultChecked={true} />
                    <label htmlFor="all">All</label>
                </div>
                <div>
                    <input type="radio" name="manufacturere" id="apple" value="apple" onChange={filterFn} />
                    <label htmlFor="apple">Apple</label>
                </div>
                <div >
                    <input type="radio" name="manufacturere" id="dell" value="dell" onChange={filterFn} />
                    <label htmlFor="dell">Dell</label>
                </div>
            </div>
        </div>
    );

export default Filter;