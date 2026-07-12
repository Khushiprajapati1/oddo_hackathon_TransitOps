import {
    useForm
    }
    from "react-hook-form";
    
    
    import {
    vehicles
    }
    from "../../data/maintenanceDummy";
    
    
    
    export default function CreateMaintenanceForm(){
    
    
    const {
    register,
    handleSubmit
    }=useForm();
    
    
    
    const submit=(data)=>{
    
    
    console.log(data);
    
    
    alert(
    "Vehicle moved to IN SHOP"
    );
    
    
    };
    
    
    
    return(
    
    <form
    
    onSubmit={handleSubmit(submit)}
    
    className="
    bg-white
    p-5
    rounded-xl
    space-y-4
    "
    
    >
    
    
    <h2 className="font-semibold">
    
    Add Maintenance
    
    </h2>
    
    
    
    <select
    
    {...register("vehicle")}
    
    className="input"
    
    >
    
    <option>
    Select Vehicle
    </option>
    
    
    {
    vehicles.map(v=>(
    
    <option
    key={v.id}
    >
    
    {v.name}
    
    </option>
    
    ))
    
    }
    
    </select>
    
    
    
    <input
    
    placeholder="Issue"
    
    {...register("issue")}
    
    className="input"
    
    />
    
    
    
    
    <textarea
    
    placeholder="Description"
    
    {...register("description")}
    
    className="input"
    
    />
    
    
    
    <button
    
    className="
    bg-blue-600
    text-white
    px-4
    py-2
    rounded
    "
    
    >
    
    Create Maintenance
    
    </button>
    
    
    </form>
    
    
    )
    
    }