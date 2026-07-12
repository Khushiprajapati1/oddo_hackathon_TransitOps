export default function TripStatusBadge({status}){


    const colors={
    
    DRAFT:"bg-gray-200 text-gray-700",
    
    DISPATCHED:"bg-blue-100 text-blue-700",
    
    COMPLETED:"bg-green-100 text-green-700",
    
    CANCELLED:"bg-red-100 text-red-700"
    
    };
    
    
    return(
    
    <span
    className={`
    px-3
    py-1
    rounded-full
    text-xs
    font-medium
    ${colors[status]}
    `}
    >
    
    {status}
    
    </span>
    
    )
    
    }