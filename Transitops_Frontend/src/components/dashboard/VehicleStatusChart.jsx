import {
    PieChart,
    Pie,
    Tooltip,
    ResponsiveContainer,
    Legend
    }
    from "recharts";
    
    
    import {
    vehicleStatusData
    }
    from "../../data/dashboardDummy";
    
    
    export default function VehicleStatusChart(){
    
    
    return(
    
    <div className="
    bg-white
    rounded-xl
    shadow
    p-3
    ">
    
    
    <h2 className="text-sm font-semibold mb-4">
    
    Vehicle Status
    
    </h2>
    
    
    <ResponsiveContainer width="100%" height={220}>
    
    
    <PieChart>
    
    
    <Pie
    
    data={vehicleStatusData}
    
    dataKey="value"
    
    nameKey="name"
    
    outerRadius={100}
    
    />
    
    
    <Tooltip/>
    
    <Legend/>
    
    
    </PieChart>
    
    
    </ResponsiveContainer>
    
    
    </div>
    
    
    )
    
    }