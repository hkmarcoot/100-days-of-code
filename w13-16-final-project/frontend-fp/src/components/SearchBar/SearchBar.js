import React from "react";
import styles from "./SearchBar.module.css";
import {useState} from "react"
import { Button } from "react-bootstrap";


function SearchBar ({locationToSearch, handleSearchOnChange, handleSearchClick}) {
   
    // console.log("This is the Input value: ", locationToSearch);
    return (
    <div className={styles.SearchContainer}>

        <div className={styles.SearchBarTitle}>
            <h4 className={styles.SearchBarTitle}>Search Location</h4>
        </div>
      
        <div className={styles.SearchBarBoxContainer}> 
            <input className={styles.SearchBarBox} type="text" placeholder=" London..." value={locationToSearch} onChange={handleSearchOnChange}/>
         </div>
        <Button className={styles.submitButton} onClick={(e) => handleSearchClick(e)}>Search</Button>
    </div>
        )

}

export default SearchBar;
