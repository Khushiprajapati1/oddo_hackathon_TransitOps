import {
    Truck,
    CheckCircle,
    Wrench,
    Route,
    Clock,
    Users,
    Activity
    }
    from "lucide-react";
    
    
    const icons={
    
    "Active Vehicles":Truck,
    
    "Available Vehicles":CheckCircle,
    
    "Vehicles In Maintenance":Wrench,
    
    "Active Trips":Route,
    
    "Pending Trips":Clock,
    
    "Drivers On Duty":Users,
    
    "Fleet Utilization":Activity
    
    };
    
    
    
    export default function StatCard({
    title,
    value
    }){
    
    
    const Icon=icons[title];
    
    
    return (
    
    <div className="
    bg-white
    rounded-xl
    border
    p-3
    shadow-sm
    hover:shadow-md
    transition
    ">
    
    
    <div className="
    flex
    justify-between
    items-center
    ">
    
    
    <div>
    
    
    <p className="
    text-[11px]
    text-gray-500
    ">
    
    {title}
    
    </p>
    
    
    <h2 className="
    text-xl
    font-bold
    mt-2
    ">
    
    {value}
    
    </h2>
    
    
    </div>
    
    
    <div className="
    bg-blue-100
    text-blue-600
    p-2
    rounded-lg
    ">
    
    
    <Icon size={18}/>
    
    
    </div>
    
    
    </div>
    
    
    </div>
    
    )
    
    }