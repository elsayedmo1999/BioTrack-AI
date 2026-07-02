import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Devices from "./pages/Devices";
import Maintenance from "./pages/Maintenance";
import Calibration from "./pages/Calibration";
import Reports from "./pages/Reports";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex">

        <Sidebar />

        <div className="flex-grow-1">

          <Navbar />

          <div className="container-fluid p-4">

            <Routes>

              <Route path="/" element={<Dashboard />} />

              <Route path="/devices" element={<Devices />} />

              <Route path="/maintenance" element={<Maintenance />} />

              <Route path="/calibration" element={<Calibration />} />

              <Route path="/reports" element={<Reports />} />

            </Routes>

          </div>

        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;