// import V1 from 'assets/images/vector-1.svg';
// import V2 from 'assets/images/vector-2.svg';
// import V3 from 'assets/images/vector-3.svg';
// import V4 from 'assets/images/vector-4.svg';
// import V5 from 'assets/images/vector-5.svg';
// import DefaultBackground from 'assets/images/white_bg.png';
// import "assets/scss/layout/Layout.scss";
// import useBreakpoint from 'hooks/breakpoints';
import React from "react";
import { Outlet } from "react-router-dom";
import { RootState } from "store";
// import { useAppSelector } from 'store/hooks';

export const AuthLayout = () => {
  //   const { bgImg } = useAppSelector((rootState: RootState) => rootState.layout);
  //   const { size } = useBreakpoint();

  return (
    <div className="layout-container auth">
      {/* <img src={V1} alt="v1" className="bg-graphic-v1" draggable="false" />
      <img src={V2} alt="v2" className="bg-graphic-v2" draggable="false" />
      <img src={V3} alt="v3" className="bg-graphic-v3" draggable="false" />
      <img src={V4} alt="v4" className="bg-graphic-v4" draggable="false" />
      <img src={V5} alt="v5" className="bg-graphic-v5" draggable="false" /> */}
      {/* {size === 'desktop' && (
        <div className="auth-bg-img">
          <img src={bgImg ? bgImg : DefaultBackground} alt="auth bg" />
        </div>
      )} */}
      {/* <div className={`auth-content ${size}`}> */}
      <Outlet />
      {/* </div> */}
    </div>
  );
};
