import { useState } from "react";
import SearchBar from "../components/SearchBar";
import DriverTable from "../components/DriverTable";
import DriverForm from "../components/DriverForm";
import "./DriverManagement.css";

function DriverManagement() {
  const [showForm, setShowForm] = useState(false);
  const [editingDriver, setEditingDriver] = useState(null);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const [drivers, setDrivers] = useState([
  {
    id: 1,
    name: "Alex",
    license: "GJ12345",
    category: "HMV",
    expiryDate: "2027-12-31",
    phone: "9876543210",
    safety: 95,
    status: "Available",
  },
  {
    id: 2,
    name: "John",
    license: "GJ67890",
    category: "LMV",
    expiryDate: "2024-01-15",
    phone: "9988776655",
    safety: 90,
    status: "On Trip",
  },
]);

  const addDriver = (newDriver) => {
    setDrivers([
      ...drivers,
      {
        id: Date.now(),
        ...newDriver,
      },
    ]);

    setShowForm(false);
  };

  const updateDriver = (updatedDriver) => {
    setDrivers(
      drivers.map((driver) =>
        driver.id === updatedDriver.id ? updatedDriver : driver
      )
    );

    setEditingDriver(null);
    setShowForm(false);
  };

  const deleteDriver = (id) => {
    if (window.confirm("Delete this driver?")) {
      setDrivers(drivers.filter((driver) => driver.id !== id));
    }
  };

  const editDriver = (driver) => {
    setEditingDriver(driver);
    setShowForm(true);
  };

  const filteredDrivers = drivers.filter((driver) => {
    const matchesSearch =
  driver.name.toLowerCase().includes(search.toLowerCase()) ||
  driver.license.toLowerCase().includes(search.toLowerCase()) ||
  driver.status.toLowerCase().includes(search.toLowerCase()) ||
  driver.category.toLowerCase().includes(search.toLowerCase()) ||
  driver.phone.includes(search);
  
    const matchesStatus =
      status === "All" || driver.status === status;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="driver-page">
      <div className="driver-header">
        <div>
          <h1>🚛 Driver Management</h1>
          <p>Manage all drivers in the transport system.</p>
        </div>

        <button
          className="add-btn"
          onClick={() => setShowForm(true)}
        >
          + Add Driver
        </button>
      </div>

      <SearchBar
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
      />

      <DriverTable
        drivers={filteredDrivers}
        onEdit={editDriver}
        onDelete={deleteDriver}
      />

      {showForm && (
        <DriverForm
          addDriver={addDriver}
          updateDriver={updateDriver}
          editingDriver={editingDriver}
          closeForm={() => {
            setEditingDriver(null);
            setShowForm(false);
          }}
        />
      )}
    </div>
  );
}

export default DriverManagement;