import "./DriverTable.css";

function DriverTable({ drivers, onEdit, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>License</th>
          <th>Category</th>
          <th>Expiry</th>
          <th>License Status</th>
          <th>Phone</th>
          <th>Safety</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {drivers.map((driver) => (
          <tr key={driver.id}>
            <td>{driver.name}</td>
            <td>{driver.license}</td>
            <td>{driver.category}</td>
            <td
              style={{
                color:
                  new Date(driver.expiryDate) < new Date() ? "red" : "green",
                fontWeight: "bold",
              }}
            >
              {driver.expiryDate}
            </td>
            <td>
              {new Date(driver.expiryDate) < new Date() ? (
                <span className="expired">Expired</span>
              ) : (
                <span className="valid">Valid</span>
              )}
            </td>
            <td>{driver.phone}</td>
            <td>
              <progress
                value={driver.safety}
                max="100"
                style={{ width: "90px" }}
              ></progress>
              <br />
              {driver.safety}%
            </td>{" "}
            <td>
              <span
                className={`status ${driver.status
                  .toLowerCase()
                  .replace(" ", "-")}`}
              >
                {driver.status}
              </span>
            </td>
            <td>
              <button className="edit-btn" onClick={() => onEdit(driver)}>
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={() => onDelete(driver.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DriverTable;
