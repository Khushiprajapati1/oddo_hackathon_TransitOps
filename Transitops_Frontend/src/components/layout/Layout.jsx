import Sidebar from "./Sidebar";
import Navbar from "./Navbar";


export default function Layout({children}){

return (

<div className="
flex
h-screen
overflow-hidden
bg-gray-100
">


<Sidebar/>


<div className="
flex-1
flex
flex-col
overflow-hidden
">


<Navbar/>


<main className="
flex-1
overflow-y-auto
p-3
md:p-4
">


{children}


</main>


</div>


</div>

)

}