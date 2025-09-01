import React from 'react'
import styles from '../components/HeaderColor.module.css'
import { Link } from "react-router-dom";
import paintbrush from "../assets/paintbrush-solid-full.svg"


export const HeaderColor = () => {
  return (
    <div className={styles.headerContainer}>
      

    <div className={styles.logoContainer}>
      <img src={paintbrush}></img>
    <h1 className={styles.companyName}>Palette World</h1>
    </div>

    <div className={styles.navigationBarContainer}>
    <ul>

      <Link className={styles.linky} to="/">
      <li>Palettes</li>
      </Link>

      <Link className={styles.linky}  to="/colorPicker">
      <li>Color-Picker</li>
      </Link>
    </ul>
</div>


    </div>
  )
}
