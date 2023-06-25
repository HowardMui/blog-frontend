import { AuthLayout, MainLayout } from "app/layouts";
import { AuthPage } from "app/pages/AuthPage/Loadable";
// import { LogoutPage } from "app/pages/AuthPage/LogoutPage";
import { HomePage } from "app/pages/HomePage";
import { NotFoundPage } from "app/pages/NotFoundPage";
import { Navigate, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* <Route path="/home/*" element={<HomeRoutes />} /> */}
        <Route path="/home" element={<HomePage />} />

        <Route path="/" element={<Navigate to="/home" replace />} />
      </Route>
      {/* <Route path="/" element={<MainLayout />}> */}
      {/* <Route path="/events/*" element={<EventRoutes />} />
  
          <Route path="/courses/*" element={<CourseRoutes />} />
  
          <Route path="/drive/*" element={<DriveRoutes />} />
  
          <Route path="/history/*" element={<HistoryRoutes />} />
  
          <Route path="/calendar" element={<CalendarPage />} />
  
          <Route path="/profile/*" element={<ProfileRoutes />} />
  
          <Route path="/notification/*" element={<NotificationRoutes />} /> */}

      {/* </Route> */}

      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<AuthPage />} />
        {/* <Route path="register" element={<RegisterPage />} /> */}
        {/* <Route path="forgot" element={<ForgotPasswordPage />} /> */}
      </Route>

      {/* <Route path="/logout" element={<LogoutPage />} /> */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
