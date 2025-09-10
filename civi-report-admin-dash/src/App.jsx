import { useState } from "react";
import Homepage from "./components/Homepage";
import { SignupModal } from "./components/SignupModal";

// import , Routes, Route from "react-router-dom"
import { Router, Routes, Route, BrowserRouter } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Overview from "./components/pages/Overview";
import { Navigate } from "react-router-dom";
import Heatmap from "./components/pages/Heatmaps";
import Reports from "./components/pages/Reports";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {/* <Homepage /> */}
<Overview/>
<Reports/>
<Heatmap/>
      {/* <BrowserRouter>
        {/* <Homepage /> }

        {/* <Router> }
        <div className="flex min-h-screen bg-gray-100">
          {isLoggedIn && <Sidebar />}
          <div className="flex-1 p-6">
            <Routes>
              <Route
                path="/signup"
                element={<SignupModal onLogin={() => setIsLoggedIn(true)} />}
              />
              <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
                <Route path="/" element={<Homepage />} />
                <Route path="/overview" element={<Overview />} />
                <Route path="/heatmap" element={<Heatmap />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/departments" />
                <Route path="/settings" />
              </Route>
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          </div>
        </div>
       
      </BrowserRouter> */}
    </>
  );
}
