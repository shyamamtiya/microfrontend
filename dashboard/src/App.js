import React, { Suspense } from "react";
import PropTypes from "prop-types";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
function App(props) {
  return (
    <div>
      <Home /> <Footer />
    </div>
  );
}

App.propTypes = {};

export default App;
