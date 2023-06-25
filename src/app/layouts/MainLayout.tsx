import { Sidebar } from "app/components/Layout";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { RootState } from "store";
import { useAppSelector } from "store/hooks";

export const MainLayout = () => {
  const { auth } = useAppSelector((rootState: RootState) => rootState);

  console.log(auth);

  return (
    <div className="layout-container main">
      {/* <img src={V1} alt="v1" className="bg-graphic-v1" draggable="false" />
      <img src={V2} alt="v2" className="bg-graphic-v2" draggable="false" />
      <img src={V3} alt="v3" className="bg-graphic-v3" draggable="false" />
      <img src={V4} alt="v4" className="bg-graphic-v4" draggable="false" />
      <img src={V5} alt="v5" className="bg-graphic-v5" draggable="false" /> */}
      <div className="content">
        {/* {size !== 'mobile' ? (
          <Header
            user={Auth?.user}
            statement={app.statement}
            color={QRcolor?.color}
          />
        ) : !NotShowNav ? (
          <BottomHeader user={Auth?.user} color={QRcolor?.color} />
        ) : null} */}
        <Container>
          <Row>
            <Col lg={12} className="d-flex flex-row align-items-start justify-content-start">
              <div className="d-none d-lg-flex">
                {/* <SideBar user={Auth?.user} statement={app.statement} /> */}
                <Sidebar />
              </div>
              <div className="flex-grow-1 content-container">
                <Outlet />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
