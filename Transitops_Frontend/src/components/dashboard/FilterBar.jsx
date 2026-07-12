export default function FilterBar(){


    return (
    
    <div className="
    bg-white
    p-5
    rounded-xl
    shadow
    grid
    md:grid-cols-4
    gap-4
    ">
    
    
    <select className="border p-3 rounded">
    
    <option>
    Vehicle Type
    </option>
    
    <option>
    Truck
    </option>
    
    <option>
    Van
    </option>
    
    <option>
    Container
    </option>
    
    </select>
    
    
    
    <select className="border p-3 rounded">
    
    <option>
    Status
    </option>
    
    <option>
    Available
    </option>
    
    <option>
    In Trip
    </option>
    
    <option>
    Maintenance
    </option>
    
    </select>
    
    
    
    <select className="border p-3 rounded">
    
    <option>
    Region
    </option>
    
    <option>
    North
    </option>
    
    <option>
    South
    </option>
    
    <option>
    West
    </option>
    
    </select>
    
    
    
    <button className="
    bg-blue-600
    text-white
    rounded
    ">
    
    Apply
    
    </button>
    
    
    </div>
    
    )
    
    }