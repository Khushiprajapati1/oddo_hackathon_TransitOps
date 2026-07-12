import {
    useState
    }
    from "react";
    
    
    import {
    MoreVertical
    }
    from "lucide-react";
    
    
    import TripActionModal 
    from "./TripActionModal";
    
    
    
    export default function TripActions({
    
    status,
    id,
    updateStatus
    
    }){
    
    
    const [open,setOpen]=useState(false);
    
    
    const [action,setAction]=useState("");
    
    
    
    const handleAction=(value)=>{
    
    setAction(value);
    
    setOpen(true);
    
    };
    
    
    
    const confirmAction=()=>{
    
    
    if(action==="Dispatch"){
    
    updateStatus(
    id,
    "DISPATCHED"
    );
    
    }
    
    
    if(action==="Complete"){
    
    updateStatus(
    id,
    "COMPLETED"
    );
    
    }
    
    
    if(action==="Cancel"){
    
    updateStatus(
    id,
    "CANCELLED"
    );
    
    }
    
    
    
    setOpen(false);
    
    
    };
    
    
    
    return(
    
    <>
    
    
    <div className="relative">
    
    
    <button
    
    onClick={()=>setOpen(!open)}
    
    className="
    p-2
    rounded-lg
    hover:bg-gray-100
    "
    
    >
    
    <MoreVertical size={18}/>
    
    </button>
    
    
    
    {
    open &&
    
    <div className="
    absolute
    right-0
    mt-2
    bg-white
    border
    rounded-lg
    shadow-md
    w-36
    z-20
    ">
    
    
    {
    status==="DRAFT" &&
    
    <>
    
    
    <button
    
    onClick={()=>handleAction("Dispatch")}
    
    className="
    block
    w-full
    text-left
    px-4
    py-2
    hover:bg-gray-100
    text-sm
    "
    
    >
    
    Dispatch
    
    </button>
    
    
    
    <button
    
    onClick={()=>handleAction("Cancel")}
    
    className="
    block
    w-full
    text-left
    px-4
    py-2
    hover:bg-gray-100
    text-sm
    text-red-600
    "
    
    >
    
    Cancel
    
    </button>
    
    
    </>
    
    }
    
    
    
    {
    status==="DISPATCHED" &&
    
    
    <button
    
    onClick={()=>handleAction("Complete")}
    
    className="
    block
    w-full
    text-left
    px-4
    py-2
    hover:bg-gray-100
    text-sm
    text-green-600
    "
    
    >
    
    Complete
    
    </button>
    
    
    }
    
    
    </div>
    
    
    }
    
    
    
    </div>
    
    
    
    <TripActionModal
    
    open={
    
    action!=="" && open===true
    
    }
    
    action={action}
    
    onClose={()=>setOpen(false)}
    
    onConfirm={confirmAction}
    
    />
    
    
    </>
    
    )
    
    }