import { Outlet, Link } from "react-router-dom";
import styles from './pages.module.css';
import React from 'react';
import recipes from './images/recipes.png'
import leftovers from './images/leftovers.png'
import plan from './foodstorage/image_prev_ui.png'
import book from './images/book.png'


const NavBar = () => {
  const clearUser = () => {
    localStorage.setItem("username","None");
    window.location.replace("./loginUI");
  }
  if(localStorage.getItem("username") === "None")
    return window.location.replace("./loginUI");
  else
  return (
    <div className={styles.navBarContainer}>
      
      {/*Title area + Log out button*/}
      <div className={styles.titleHeaderContainer}>
        <div className={styles.titleContainer}>
            <a href="/" style={{color: 'inherit', textDecoration: 'inherit' }}>
                <img src={book} alt="Home" className={styles.titleImg}/>
                <p className={styles.titleText}>SmartPantry</p>
            </a>
        </div>
        <div className={styles.signOutContainer}>
            <p className={styles.signOutText} style={{fontFamily:'NotoSans'}}>HELLO, {localStorage.getItem("username")}</p>
            <button onClick={clearUser} style={{color: 'inherit'}} className={styles.signOutBtn}><p className={styles.signOutText}>Sign Out</p></button>
        </div>
      </div>

      {/*Navigation Bar*/}
      <nav>
        <div className={styles.navItemsContainer}>
            <div className={styles.navItem}>
                <Link to="/" style={{color: 'inherit', textDecoration: 'inherit'}}>
                    <img src={recipes} alt="Recipes" className={styles.navImg}/>
                    <p className={styles.navItemText}>Recipes</p>
                </Link>
            </div>
        <div className={styles.navItem}>
            <Link to="/food-storage-tips" style={{color: 'inherit', textDecoration: 'inherit'}}>
            <img
                src={require('./foodstorage/image_prev_ui.png')}
                alt="mealplan"
                className={`${styles.foodStorageImg} ${styles.foodStorageImgPadding}`}
            />
            <p className={styles.navItemText}>Food Storage Tips</p>
          </Link>
        </div>
            <div className={styles.navItem}>
                <Link to="/Leftovers" style={{color: 'inherit', textDecoration: 'inherit'}}>
                    <img src={leftovers} alt="Leftovers" className={styles.navImg}/>
                    <p className={styles.navItemText}>Leftovers</p>
                </Link>
            </div>
        </div>
      </nav>
      <Outlet />
    </div>
  )
};

export default NavBar;