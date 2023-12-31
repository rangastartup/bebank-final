import { AiOutlineGithub, AiFillLinkedin, AiFillCode } from "react-icons/ai";
import styles from "../styles/Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_section}>
        <h4>BeBank</h4>
        <p>
          BeBank is the final capstone project of the MIT - Fullstack
          Development with MERN Course. It consist on React, Express, Mongo, NextJs
          application for sumitating Banking flow.
        </p>
        <div className={styles.footer_subsection}>
          <span>Author - Logan Sundaram</span>
        </div>
        <div className={styles.footer_subsection}>
          <span>Copyright @ MIT -License</span>
        </div>
      </div>
      <div className={styles.footer_section}>
        <h4>Contact</h4>
        <div>
          <a
            href="https://github.com/anthgrim"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.footer_contact_item}>
              <div className={styles.footer_contact_item_icon}>
                <AiOutlineGithub />
              </div>
              <div>LoganS</div>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/kevin-grimaldi-392b44178/"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.footer_contact_item}>
              <div className={styles.footer_contact_item_icon}>
                <AiFillLinkedin />
              </div>
              <div>Logan Sundaram</div>
            </div>
          </a>
          <a
            href="https://github.com/anthgrim/OrderQue"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.footer_contact_item}>
              <div className={styles.footer_contact_item_icon}>
                <AiFillCode />
              </div>
              <div>Project Repository</div>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};
// 
// export default Footer;
