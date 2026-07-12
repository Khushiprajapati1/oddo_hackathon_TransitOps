import {
    recentTrips
    }
    from "../../data/dashboardDummy";
    
    
    export default function RecentTripsTable(){
    
    
    return(
    
    <div className="
    bg-white
    shadow
    rounded-xl
    p-3
    overflow-x-auto
    ">
    
    
    <h2 className="
    text-sm font-semibold
    mb-5
    ">
    
    Recent Trips
    
    </h2>
    
    
    <table className="
    w-full
    ">
    
    
    <thead>
    
    <tr className="border-b">
    
    <th className="p-2">
    Source
    </th>
    
    <th>
    Destination
    </th>
    
    <th>
    Vehicle
    </th>
    
    <th>
    Driver
    </th>
    
    <th>
    Status
    </th>
    
    </tr>
    
    </thead>
    
    
    <tbody>
    
    
    {
    recentTrips.map(trip=>(
    
    <tr
    key={trip.id}
    className="border-b"
    >
    
    
    <td className="p-2">
    {trip.source}
    </td>
    
    <td>
    {trip.destination}
    </td>
    
    <td>
    {trip.vehicle}
    </td>
    
    <td>
    {trip.driver}
    </td>
    
    <td>
    {trip.status}
    </td>
    
    
    </tr>
    
    ))
    
    }
    
    
    </tbody>
    
    
    </table>
    
    
    </div>
    
    )
    
    }