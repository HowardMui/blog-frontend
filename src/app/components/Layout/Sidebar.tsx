import { routesMap } from "config/routes";
import React from "react";
import { NavLink } from "react-router-dom";

interface Props {
  user?: any;
  // statement: Statement | null;
}

export const Sidebar = ({ user }: Props) => {
  return (
    <div className="side-bar">
      <div className="w-100">
        {user ? (
          <div className="p-3">
            {/* <MemberShipCard user={user} fromProfilePage={false} /> */}

            {/* <div className="d-flex flex-row align-items-center justify-content-between mt-2">
              <div className="font-15px-bold">會籍管理</div>
              <div className="d-flex flex-row">
                <img src={Coin} alt="coin icon" />
                <div className="ms-1 font-18px-bold">
                  {numberWithCommas(user?.membershipPoint)}
                </div>
              </div>
            </div> */}

            {/* <div className="d-flex flex-row align-items-end justify-content-between mt-2">
              <div>
                <div className="font-14px-semibold">
                  未繳費用：
                  <span className="text-primary">
                    {statement?.status === 'pending'
                      ? formatPrice(toClientPrice(statement.totalAmount))
                      : '$ -'}
                  </span>
                </div>
                <div className="font-14px-medium text-color-secondary mt-2">
                  繳費到期日：
                  {statement?.status === 'pending'
                    ? moment(statement.dueDate)
                        .locale('en')
                        .format('DD-MMM-YYYY')
                    : ' - '}
                </div>
              </div>
              {statement?.status !== 'settled' ? (
                <Link
                  to={`/profile/fee/${statement?.statementId}`}
                  rel="noreferrer"
                >
                  <Button>繳費</Button>
                </Link>
              ) : null}
            </div> */}
          </div>
        ) : (
          //   <div className="w-100 d-flex flex-row align-items-center justify-content-center pt-4">
          //     <img src={Logo} width={80} height={80} alt="sv logo" />
          //   </div>
          <div className=""></div>
        )}

        <div className="d-flex flex-column align-items-start justify-content-start mt-3">
          {routesMap.map((route) => (
            <NavLink to={route.path} key={route.path} className="d-flex flex-row align-items-center justify-content-start nav-item my-2">
              {({ isActive }) => (
                <>
                  <img src={isActive ? route.activeIcon : route.icon} alt={`${route.title} icon`} />
                  <div className="nav-item-title">{route.title}</div>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>
      {user && (
        <div className="d-flex flex-column align-items-center justify-content-end flex-1 mb-3 w-100">
          <NavLink to="/logout" className="d-flex flex-row align-items-center justify-content-start nav-item">
            {/* <img src={LogoutIcon} alt="logout icon" /> */}
            <div className="nav-item-title">登出</div>
          </NavLink>
        </div>
      )}
    </div>
  );
};
