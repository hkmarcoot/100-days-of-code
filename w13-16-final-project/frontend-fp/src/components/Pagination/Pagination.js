
import styles from "./pagination.module.css";


import React from 'react';

const Pagination = ({ paginate, eventsPerPage, numbersOfEvents }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(numbersOfEvents / eventsPerPage); i++) {
    pageNumbers.push(i);
    // console.log("Creating page numbers...")
  }

  return (
    <nav>
      <ul className={styles.pagination}>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <button onClick={() => paginate(number)} className={styles["page-link"]}>
              {number}
            </button>
          </li>
        ))}
      </ul>
</nav>
  );
};

export default Pagination;