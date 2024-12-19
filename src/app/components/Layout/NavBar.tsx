import React from "react";
import styles from "./NavBar.module.css"; 
import Image from "next/image";
const NavBar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.logoContainer}>
          
          <Image
            className=""
            src="/assets/icons/logo.png"
            alt="Decorative image"
            width={150}
            height={150}
          />
        </div>
        <nav className={styles.navLinks}>
          <a href="#" className={styles.navLink}>
            Welcome
          </a>
          <a href="#" className={styles.navLink}>
            About Us
          </a>
          <a href="#" className={styles.navLink}>
            Methodology
          </a>
          <a href="#" className={styles.navLink}>
            Price Plan
          </a>
        </nav>
        <div className={styles.buttonsContainer}>
          <button className={styles.loginButton}>Login</button>
          <button className={styles.tryButton}>Try free now!</button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
