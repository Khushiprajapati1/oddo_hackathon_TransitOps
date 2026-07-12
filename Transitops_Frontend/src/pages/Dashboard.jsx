import StatCard from "../components/dashboard/StatCard";

import FilterBar from "../components/dashboard/FilterBar";

import VehicleStatusChart from "../components/dashboard/VehicleStatusChart";

import TripStatusChart from "../components/dashboard/TripStatusChart";

import RecentTripsTable from "../components/dashboard/RecentTripsTable";


import {
dashboardStats
}
from "../data/dashboardDummy";



export default function Dashboard(){


return(

<div className="
p-6
bg-gray-100
min-h-screen
">


<h1 className="
text-xl
font-bold
mb-4
">

Fleet Dashboard

</h1>



<FilterBar/>




<div className="
grid
grid-cols-2
xl:grid-cols-7
gap-3
">


{
dashboardStats.map((item,index)=>(

<StatCard
key={index}
title={item.title}
value={item.value}
/>

))
}


</div>



<div className="
grid
lg:grid-cols-2
gap-6
mt-8
">


<VehicleStatusChart/>


<TripStatusChart/>


</div>




<div className="mt-8">

<RecentTripsTable/>

</div>



</div>


)

}