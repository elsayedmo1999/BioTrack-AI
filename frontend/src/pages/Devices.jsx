import { useEffect, useState } from "react";
import api from "../services/api";
import DeviceForm from "../components/DeviceForm";
import DeviceTable from "../components/DeviceTable";

function Devices() {
  const [devices, setDevices] = useState([]);

  async function loadDevices() {
    const res = await api.get("/devices");
    setDevices(res.data);
  }

  useEffect(() => {
    loadDevices();
  }, []);

  return (
    <div className="container-fluid">

      <h2 className="mb-4">
        Medical Devices
      </h2>

      <DeviceForm reload={loadDevices} />

      <br />

      <DeviceTable devices={devices} />

    </div>
  );
}

export default Devices;