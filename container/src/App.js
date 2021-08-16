import React, { lazy, Suspense, useState, useEffect } from "react";

const DashBoardApp = lazy(() => import("./components/DashBoardApp"));

export default () => {
  return (
    <div>
      In container
      <Suspense fallback={<div>Loading...</div>}>
        <DashBoardApp />
      </Suspense>
    </div>
  );
};
