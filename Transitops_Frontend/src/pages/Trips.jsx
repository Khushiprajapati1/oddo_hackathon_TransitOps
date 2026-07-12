import {
    useState
    }
    from "react";
    
    
import TripTable from "../components/trips/TripTable";
    
    import CreateTripForm from "../components/trips/CreateTripForm";
    
    
    import {
    trips as initialTrips
    }
    from "../data/tripDummy";
    
    
    
    export default function Trips(){
    
    
    const [trips,setTrips]=useState(initialTrips);
    
    
    
    const addTrip=(trip)=>{
    
    
    setTrips([
    
    ...trips,
    
    {
    ...trip,
    id:Date.now(),
    status:"DRAFT"
    }
    
    ]);
    
    
    };
    
    
    
    const updateStatus=(id,status)=>{
    
    
    setTrips(
    
    trips.map(trip=>
    
    trip.id===id
    
    ?
    
    {
    ...trip,
    status
    }
    
    :
    
    trip
    
    )
    
    );
    
    
    };
    
    
    
    return(
    
    <div>
    
    
    <div className="
    grid
    lg:grid-cols-3
    gap-5
    ">
    
    
    <div>
    
    <CreateTripForm
    
    addTrip={addTrip}
    
    />
    
    </div>
    
    
    
    <div className="
    lg:col-span-2
    ">
    
    
    <TripTable
    
    trips={trips}
    
    updateStatus={updateStatus}
    
    />
    
    
    </div>
    
    
    </div>
    
    
    </div>
    
    )
    
    }