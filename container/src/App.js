import React, { lazy, Suspense, useState, useEffect } from "react";
// const DashBoardApp = lazy(() => import("./components/DashBoardApp"));
import DashBoardApp from "./components/DashBoardApp";
export default () => {
  return (
    <div>
      <div className="dashboard-container">In containers</div>
      <DashBoardApp />
      {/* <Suspense fallback={<div>Loading...</div>}>
        <DashBoardApp />
      </Suspense> */}
    </div>
  );
};
