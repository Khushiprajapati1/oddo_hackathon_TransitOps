import { useEffect, useState } from "react";
import "./DriverForm.css";

function DriverForm({
  closeForm,
  addDriver,
  updateDriver,
  editingDriver,
}) {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    license: "",
    category: "",
    expiryDate: "",
    phone: "",
    safety: "",
    status: "Available",
  });

  useEffect(() => {
    if (editingDriver) {
      setFormData(editingDriver);
    }
  }, [editingDriver]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (
      !formData.name ||
      !formData.license ||
      !formData.category ||
      !formData.phone
    ) {
      alert("Fill all required fields");
      return;
    }

    if (editingDriver) {
      updateDriver(formData);
    } else {
      addDriver(formData);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">

        <h2>
          {editingDriver ? "Edit Driver" : "Add Driver"}
        </h2>

        <input
          name="name"
          placeholder="Driver Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          name="license"
          placeholder="License Number"
          value={formData.license}
          onChange={handleChange}
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="">Select Category</option>
          <option>LMV</option>
          <option>HMV</option>
          <option>Transport</option>
        </select>

        <input
          type="date"
          name="expiryDate"
          value={formData.expiryDate}
          onChange={handleChange}
        />

        <input
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <input
          type="number"
          name="safety"
          placeholder="Safety Score"
          value={formData.safety}
          onChange={handleChange}
        />

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option>Available</option>
          <option>On Trip</option>
          <option>Off Duty</option>
          <option>Suspended</option>
        </select>

        <div className="button-group">
          <button
            className="save-btn"
            onClick={handleSubmit}
          >
            {editingDriver ? "Update Driver" : "Save Driver"}
          </button>

          <button
            className="cancel-btn"
            onClick={closeForm}
          >
            Cancel
          </button>
        </div>

      </div>
    </div>
  );
}

export default DriverForm;