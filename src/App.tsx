import React from "react";
import { Route, Routes } from "react-router-dom";

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Analytics = React.lazy(() => import("./pages/Analytics"));
const Centers = React.lazy(() => import("./pages/Centers"));
const Collectors = React.lazy(() => import("./pages/Collectors"));
const Notifications = React.lazy(() => import("./pages/Notifications"));
const Settings = React.lazy(() => import("./pages/Settings"));
const Admins = React.lazy(() => import("./pages/Admins"));
const SignIn = React.lazy(() => import("./pages/auth/SignIn"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/centers" element={<Centers />} />
        <Route path="/collectors" element={<Collectors />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/admins" element={<Admins />} />
      </Routes>
    </>
  );
}

export default App;
