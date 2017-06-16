import React from 'react';

import Results from './Results';
import styles from './Search.scss';

const Search = () => (
  <div className={styles.search}>
    <h2>Search</h2>
    <Results />
  </div>
);

export default Search;
