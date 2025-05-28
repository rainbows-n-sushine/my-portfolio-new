import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
            <img src={getImageUrl("about/webapp.png")} alt="Web app icon" />
            <div className={styles.aboutItemText}>
              <h3>Web Developer</h3>
              <p>
              I'm a web developer that loves to work on both the frontend and the backend of a web app.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/mobileApp.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
            <h3>Mobile Developer</h3>
              <p>
                I collaborated with school friends on a passion project.Berso, a mobile
                app built from the ground up.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I specialize in creating responsive and optimized web
                interfaces using modern frameworks.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/databaseIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
            <h3>Backend Developer</h3>
              <p>
                I’ve worked on various backend systems using the MERN stack.
                From scratch-built custom systems to enhancing existing codebases.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiDesignerIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
            <h3>UI Designer</h3>
    <p>
     
      Whether it's a landing page, dashboard, or full mobile flow, I aim for clarity, usability, and modern aesthetics when designing an interface.
    </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
