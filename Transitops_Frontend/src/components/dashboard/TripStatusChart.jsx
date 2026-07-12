import {

    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
    
    }
    from "recharts";
    
    
    import {
    tripStatusData
    }
    from "../../data/dashboardDummy";
    
    
    export default function TripStatusChart(){
    
    
    return(
    
    <div className="
    bg-white
    rounded-xl
    shadow
    p-3
    ">
    
    
    <h2 className="text-sm font-semiboldfont-bold mb-4">
    
    Trip Analytics
    
    </h2>
    
    
    <ResponsiveContainer
    width="100%"
    height={220}
    >
    
    
    <BarChart data={tripStatusData}>
    
    
    <XAxis dataKey="name"/>
    
    <YAxis/>
    
    
    <Tooltip/>
    
    
    <Bar 
    dataKey="count"
    />
    
    
    </BarChart>
    
    
    </ResponsiveContainer>
    
    
    </div>
    
    )
    
    }