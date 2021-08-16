import React, { lazy, Suspense, useState, useEffect } from "react";
const DashBoardApp = lazy(() => import("./components/DashBoardApp"));

export default () => {
  return (
    <div>
      <div className="dashboard-container">In container</div>
      <Suspense fallback={<div>Loading...</div>}>
        <DashBoardApp />
      </Suspense>
    </div>
  );
};
