import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useAuthStore } from "./utils/useAuthStore";
import api from "./utils/axiosInstance";
import usePageLoader from "./utils/pageLoader";
import "nprogress/nprogress.css";

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Analytics = React.lazy(() => import("./pages/Analytics"));
const Centers = React.lazy(() => import("./pages/Centers"));
const Collectors = React.lazy(() => import("./pages/Collectors"));
const Activity_logs = React.lazy(() => import("./pages/Activity_logs"));
const Settings = React.lazy(() => import("./pages/Settings"));
const Admins = React.lazy(() => import("./pages/Admins"));
const SignIn = React.lazy(() => import("./pages/auth/SignIn"));
const ForgotPassword = React.lazy(() => import("./pages/auth/ForgotPassword"));

function App() {
  const authLoading = useAuthStore((state) => state.authLoading);
  const setUser = useAuthStore((state) => state.setUser);
  const clearUser = useAuthStore((state) => state.clearUser);

  useEffect(() => {
    api
      .get(`/api/admin/profile`)
      .then((res) => setUser(res.data.data.admin))
      .catch(() => clearUser());
  }, []);

  usePageLoader();

  if (authLoading) {
    return "Loading...";
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/centers" element={<Centers />} />
        <Route path="/collectors" element={<Collectors />} />
        <Route path="/activity_logs" element={<Activity_logs />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/admins" element={<Admins />} />
      </Routes>
    </>
  );
}

export default App;
