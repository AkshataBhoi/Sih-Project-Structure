import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";

// Pages
import Login from "./components/pages/Login.jsx";
import Profile from "./components/pages/Profile.jsx";
import Overview from "./components/pages/Overview.jsx";
import UserManagement from "./components/pages/UserManagement.jsx";
import IssuesReport from "./components/pages/IssuesReport.jsx";
import SubmitIssuesForm from "./components/pages/SubmitIssuesForm.jsx";

// Layout
import DashboardLayout from "./components/DashBoardLayout/DashboardLayout";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (loginData) => {
    setUser(loginData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <>
      <Router>
        <Routes>
          {/* Public Route */}
          <Route path="/login" element={<Login onLogin={handleLogin} />} />

          {/* Protected Dashboard Routes */}
          {user ? (
            <Route element={<DashboardLayout />}>
              <Route path="/" element={<Navigate to="/overview" />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/reports" element={<IssuesReport />} />
              <Route path="/users" element={<UserManagement />} />
              <Route path="/report-issue" element={<SubmitIssuesForm />} />
              <Route
                path="/profile"
                element={<Profile user={user} onLogout={handleLogout} />}
              />
            </Route>
          ) : (
            <Route path="*" element={<Navigate to="/login" />} />
          )}
        </Routes>
      </Router>
    </>
  );
}

export default App;
