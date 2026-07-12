import "./SearchBar.css";

function SearchBar({ search, setSearch, status, setStatus }) {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="🔍 Search Driver..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="All">All Status</option>
        <option value="Available">Available</option>
        <option value="On Trip">On Trip</option>
        <option value="Off Duty">Off Duty</option>
        <option value="Suspended">Suspended</option>
      </select>
    </div>
  );
}

export default SearchBar;