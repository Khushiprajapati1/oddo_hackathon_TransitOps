import {
    LayoutDashboard,
    Truck,
    Users,
    Route,
    Wrench,
    BarChart3,
    Settings,
    LogOut
    }
    from "lucide-react";
    
    
    import {NavLink}
    from "react-router-dom";
    
    
    export default function Sidebar(){
    
    
    const menu=[
    
    {
    name:"Dashboard",
    path:"/",
    icon:<LayoutDashboard size={18}/>
    },
    
    {
    name:"Vehicles",
    path:"/vehicles",
    icon:<Truck size={18}/>
    },
    
    {
    name:"Drivers",
    path:"/drivers",
    icon:<Users size={18}/>
    },
    
    {
    name:"Trips",
    path:"/trips",
    icon:<Route size={18}/>
    },
    
    {
    name:"Maintenance",
    path:"/maintenance",
    icon:<Wrench size={18}/>
    },
    
    {
    name:"Reports",
    path:"/reports",
    icon:<BarChart3 size={18}/>
    },
    
    ];
    
    
    return (
    
    <aside className="
    hidden
    md:flex
    w-52
    bg-slate-950
    text-white
    flex-col
    p-4
    ">
    
    
    <div className="
    mb-8
    ">
    
    
    <h1 className="
    text-lg
    font-bold
    ">
    
    TransitOps
    
    </h1>
    
    
    <p className="
    text-xs
    text-gray-400
    mt-1
    ">
    
    Fleet Management
    
    </p>
    
    
    </div>
    
    
    
    <nav className="
    space-y-1
    flex-1
    ">
    
    
    {
    menu.map(item=>(
    
    <NavLink
    
    key={item.path}
    
    to={item.path}
    
    
    className={({isActive})=>
    
    `
    flex
    items-center
    gap-3
    px-3
    py-2
    rounded-lg
    text-sm
    
    transition
    
    ${
    isActive
    ?
    "bg-blue-600 text-white"
    :
    "text-gray-300 hover:bg-slate-800"
    }
    
    `
    
    }
    
    
    >
    
    
    {item.icon}
    
    <span>
    
    {item.name}
    
    </span>
    
    
    </NavLink>
    
    
    ))
    
    }
    
    
    </nav>
    
    
    <button className="
    flex
    items-center
    gap-3
    text-sm
    text-gray-300
    px-3
    py-2
    ">
    
    
    <LogOut size={18}/>
    
    Logout
    
    
    </button>
    
    
    </aside>
    
    
    )
    
    }