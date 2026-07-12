import { X } from "lucide-react";


export default function TripActionModal({

open,
action,
onClose,
onConfirm

}){


if(!open) return null;


return(

<div className="
fixed
inset-0
bg-black/40
flex
items-center
justify-center
z-50
">


<div className="
bg-white
rounded-xl
p-6
w-[350px]
shadow-lg
">


<div className="
flex
justify-between
items-center
mb-5
">


<h2 className="
font-semibold
text-lg
">

Confirm Action

</h2>


<button
onClick={onClose}
>

<X size={20}/>

</button>


</div>



<p className="
text-gray-600
text-sm
mb-6
">

Are you sure you want to

<span className="
font-semibold
mx-1
">

{action}

</span>

this trip?

</p>



<div className="
flex
justify-end
gap-3
">


<button

onClick={onClose}

className="
px-4
py-2
border
rounded-lg
"

>

Cancel

</button>



<button

onClick={onConfirm}

className={`
px-4
py-2
rounded-lg
text-white

${
action==="Cancel"
?
"bg-red-600"
:
"bg-blue-600"
}

`}

>

Confirm

</button>


</div>


</div>


</div>

)

}