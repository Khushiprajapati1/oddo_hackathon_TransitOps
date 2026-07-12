import {
    Bell,
    Search,
    UserCircle
    }
    from "lucide-react";
    
    
    export default function Navbar(){
    
    return (
    
    <header className="
    h-12
    bg-white
    border-b
    flex
    items-center
    justify-between
    px-5
    ">
    
    
    <div className="
    flex
    items-center
    gap-3
    ">
    
    
    <h2 className="
    font-semibold
    text-gray-800
    ">
    
    Fleet Dashboard
    
    </h2>
    
    
    </div>
    
    
    
    <div className="
    flex
    items-center
    gap-5
    ">
    
    
    <div className="
    hidden
    md:flex
    items-center
    bg-gray-100
    px-3
    py-1.5
    rounded-lg
    ">
    
    
    <Search size={18}/>
    
    <input
    
    placeholder="Search"
    
    className="
    bg-transparent
    outline-none
    ml-2
    text-base
    "
    
    />
    
    
    </div>
    
    
    <Bell size={18}/>
    
    
    <UserCircle size={18}/>
    
    
    </div>
    
    
    
    </header>
    
    )
    
    }