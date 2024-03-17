import { Outlet, Link } from "react-router-dom";
import styles from './pages.module.css';
import React from 'react';
import recipes from './images/recipes.png'
import leftovers from './images/leftovers.png'
import plan from './images/plan.png'
import book from './images/book.png'


const NavBar = () => {
  return (
    <div className={styles.navBarContainer}>
      
      {/*Title area + Log out button*/}
      <div className={styles.titleHeaderContainer}>
        <div className={styles.titleContainer}>
            <a href="/" style={{color: 'inherit', textDecoration: 'inherit' }}>
                <img src={book} alt="Home" className={styles.titleImg}/>
                <p  className={styles.titleText}>SmartPantry</p>
            </a>
        </div>
        <div className={styles.signOutContainer}>
            {/*Link back to Login page*/}
            <p className={styles.signOutText} style={{fontFamily:'NotoSans'}}>HELLO, USERNAME</p> {/*Pull username from database*/}
            <Link to="/loginUI" style={{color: 'inherit'}}><p className={styles.signOutText}>Sign Out</p></Link>
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
                <img src={plan} alt="mealplan" className={styles.navImg}/>
                <p className={styles.navItemText}>Meal Plan</p>
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