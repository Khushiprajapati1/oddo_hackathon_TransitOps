export default function MaintenanceStatus({
    status
    }){
    
    
    const style={
    
    OPEN:
    "bg-yellow-100 text-yellow-700",
    
    IN_PROGRESS:
    "bg-blue-100 text-blue-700",
    
    COMPLETED:
    "bg-green-100 text-green-700"
    
    
    };
    
    
    return(
    
    <span
    className={`
    px-3
    py-1
    rounded-full
    text-xs
    ${style[status]}
    `}
    >
    
    {status}
    
    </span>
    
    )
    
    }