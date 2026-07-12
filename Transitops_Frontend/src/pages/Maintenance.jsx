import {
    Plus
    }
    from "lucide-react";
    
    
    import MaintenanceTable
    from "../components/maintenance/MaintenanceTable";
    
    
    export default function Maintenance(){
    
    
    return(
    
    <div>
    
    
    <div className="
    flex
    justify-between
    mb-5
    ">
    
    
    <h1 className="
    text-xl
    font-semibold
    ">
    
    Maintenance Management
    
    </h1>
    
    
    <button
    className="
    bg-blue-600
    text-white
    px-4
    py-2
    rounded-lg
    flex
    gap-2
    items-center
    "
    >
    
    
    <Plus size={18}/>
    
    Add Maintenance
    
    
    </button>
    
    
    </div>
    
    
    <MaintenanceTable/>
    
    
    </div>
    
    )
    
    }