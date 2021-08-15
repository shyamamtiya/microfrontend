import React from "react";
import PropTypes from "prop-types";
import styles from "./Home.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className="">Hello Friends 👋</h1>
      <p className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
        consequuntur odio aut nobis ab quis? Reiciendis doloremque ut quo fugiat
        eveniet tempora, atque alias earum ullam inventore itaque sapiente iste?
      </p>
    </div>
  );
};

Home.propTypes = {};

export default Home;
