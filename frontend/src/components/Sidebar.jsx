import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaLaptopMedical,
  FaTools,
  FaClipboardCheck,
  FaFileAlt,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div
      style={{
        width: "260px",
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        padding: "20px",
      }}
    >
      <h2 className="mb-4">🏥 BioTrack AI</h2>

      <ul className="nav flex-column">

        <li className="nav-item mb-3">
          <Link className="nav-link text-white" to="/">
            <FaTachometerAlt /> Dashboard
          </Link>
        </li>

        <li className="nav-item mb-3">
          <Link className="nav-link text-white" to="/devices">
            <FaLaptopMedical /> Devices
          </Link>
        </li>

        <li className="nav-item mb-3">
          <Link className="nav-link text-white" to="/maintenance">
            <FaTools /> Maintenance
          </Link>
        </li>

        <li className="nav-item mb-3">
          <Link className="nav-link text-white" to="/calibration">
            <FaClipboardCheck /> Calibration
          </Link>
        </li>

        <li className="nav-item mb-3">
          <Link className="nav-link text-white" to="/reports">
            <FaFileAlt /> Reports
          </Link>
        </li>

      </ul>
    </div>
  );
}

export default Sidebar;