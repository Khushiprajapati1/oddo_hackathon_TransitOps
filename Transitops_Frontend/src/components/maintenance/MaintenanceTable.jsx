import {
    maintenanceRecords
    }
    from "../../data/maintenanceDummy";
    
    
    import MaintenanceStatus from "./MaintenanceStatus";
    
    
    export default function MaintenanceTable(){
    
    
    return(
    
    <div className="
    bg-white
    rounded-xl
    shadow-sm
    p-4
    overflow-x-auto
    ">
    
    
    <table className="
    w-full
    text-sm
    ">
    
    
    <thead>
    
    <tr className="border-b">
    
    <th>
    Vehicle
    </th>
    
    <th>
    Issue
    </th>
    
    <th>
    Date
    </th>
    
    <th>
    Status
    </th>
    
    
    </tr>
    
    </thead>
    
    
    <tbody>
    
    
    {
    maintenanceRecords.map(item=>(
    
    <tr
    key={item.id}
    className="border-b"
    >
    
    
    <td className="p-3">
    
    {item.vehicle}
    
    </td>
    
    
    <td>
    
    {item.issue}
    
    </td>
    
    
    <td>
    
    {item.date}
    
    </td>
    
    
    <td>
    
    <MaintenanceStatus
    status={item.status}
    />
    
    </td>
    
    
    </tr>
    
    ))
    }
    
    
    </tbody>
    
    
    </table>
    
    
    </div>
    
    )
    
    }