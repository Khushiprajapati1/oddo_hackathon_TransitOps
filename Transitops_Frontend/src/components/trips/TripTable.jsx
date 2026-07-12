import TripStatusBadge from "./TripStatusBadge";
import TripActions from "./TripActions";


export default function TripTable({
trips,
updateStatus
}){


return(

<div className="
bg-white
rounded-xl
shadow-sm
p-4
overflow-x-auto
">


<table className="w-full text-sm">


<thead>

<tr className="border-b">

<th className="p-3">
Source
</th>

<th>
Destination
</th>

<th>
Vehicle
</th>

<th>
Driver
</th>

<th>
Weight
</th>

<th>
Distance
</th>

<th>
Status
</th>

<th>
Actions
</th>


</tr>

</thead>


<tbody>


{
trips.map(trip=>(

<tr
key={trip.id}
className="border-b"
>


<td className="p-3">
{trip.source}
</td>


<td>
{trip.destination}
</td>


<td>
{trip.vehicle}
</td>


<td>
{trip.driver}
</td>


<td>
{trip.cargoWeight} kg
</td>


<td>
{trip.distance} km
</td>


<td>

<TripStatusBadge 
status={trip.status}
/>

</td>


<td>

<TripActions

status={trip.status}

id={trip.id}

updateStatus={updateStatus}

/>

</td>


</tr>


))

}


</tbody>


</table>


</div>

)

}