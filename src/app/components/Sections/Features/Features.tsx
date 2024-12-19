import React from "react";
import Image from "next/image";
import styles from "./Features.module.css";  
const Features = () => {
  return (
    <>
      <div className={styles.features}>
        <div className={styles.text}>
          <h2 className={styles.tTagline}>Simplify your hires</h2>
          <h1 className={styles.tTitle}>PramitiHR: Your Partner for Interviews</h1>
        </div>
        <div className={styles.container}>
          <div className={styles.featureItem}>
            <div className={styles.iconContainer}>
              <img src="/assets/icons/ray.png"></img>
              <div className={styles.lighting}></div>
            </div>
            <div className={styles.textContainer}>
              <h3 className={styles.featureTitle}>Powerful AI</h3>
              <p className={styles.featureSubtitle}>
                Advanced AI ability to preselect candidates efficiently.
              </p>

            </div>
          
            <a href="#" className={styles.learnMore}>Learn more about AI</a>
          </div>

          <div className={styles.featureItem}>
            <div className={styles.iconContainer}>
            <img src="/assets/icons/Group.png"></img>

              <div className={styles.sparkle}>
                <div className={styles.clipPathGroup}>
                  <div className={styles.group}></div>
                </div>
              </div>
            </div>
            <div className={styles.textContainer}>
              <h3 className={styles.featureTitle}>Efficient Interviews</h3>
              <p className={styles.featureSubtitle}>
                Save time by automating the interview process smart technology.
              </p>
            </div>
            
            <a href="#" className={styles.learnMore}>Find out more details</a>
          </div>

          {/* Feature 3 */}
          <div className={styles.featureItem}>
            <div className={styles.iconContainer}>
            <img src="/assets/icons/candado.png"></img>

              <div className={styles.lock}></div>
            </div>
            <div className={styles.textContainer}>
              <h3 className={styles.featureTitle}>Precise Results</h3>
              <p className={styles.featureSubtitle}>
                Obtain detailed and accurate reports on the evaluated candidates.
              </p>
            </div>
            
            <a href="#" className={styles.learnMore}>Explore the results</a>
          </div>

          <div className={styles.featureItem}>
            <div className={styles.iconContainer}>
            <img src="/assets/icons/flow.png"></img>

              <div className={styles.heart}></div>
            </div>
            <div className={styles.textContainer}>
              <h3 className={styles.featureTitle}>Intuitive interface</h3>
              <p className={styles.featureSubtitle}>
                Friendly design for a hassle-free user experience.
              </p>
            </div>
            <a href="#" className={styles.learnMore}>Get to know our interface</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
