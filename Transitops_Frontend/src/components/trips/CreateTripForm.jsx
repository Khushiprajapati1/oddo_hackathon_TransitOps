import {
    useForm
    } from "react-hook-form";
    
    
    import {
    z
    }
    from "zod";
    
    
    import {
    zodResolver
    }
    from "@hookform/resolvers/zod";
    
    
    import {
    availableVehicles,
    availableDrivers
    }
    from "../../data/tripDummy";
    
    
    const schema=z.object({
    
    source:z.string()
    .min(3,"Source required"),
    
    destination:z.string()
    .min(3,"Destination required"),
    
    vehicle:z.string()
    .nonempty(),
    
    driver:z.string()
    .nonempty(),
    
    cargoWeight:z.number()
    .min(1,"Weight required"),
    
    distance:z.number()
    .min(1,"Distance required")
    
    });
    
    
    
    export default function CreateTripForm({
        addTrip
        }){
    
    const {
    
    register,
    handleSubmit,
    formState:{errors}
    
    }=useForm({
    
    resolver:zodResolver(schema)
    
    });
    
    
    
    const submit=(data)=>{


        addTrip(data);
        
        
        alert(
        "Trip Created Successfully"
        );
        
        
        };
    
    
    
    return(
    
    <form
    
    onSubmit={handleSubmit(submit)}
    
    className="
    bg-white
    rounded-xl
    p-5
    space-y-4
    "
    
    
    >
    
    
    <h2 className="
    text-lg
    font-semibold
    ">
    
    Create New Trip
    
    </h2>
    
    
    
    <input
    
    placeholder="Source"
    
    {...register("source")}
    
    className="input"
    
    />
    
    <p className="error">
    
    {errors.source?.message}
    
    </p>
    
    
    
    
    <input
    
    placeholder="Destination"
    
    {...register("destination")}
    
    className="input"
    
    />
    
    
    
    
    <select
    {...register("vehicle")}
    
    className="input"
    >
    
    <option>
    Select Vehicle
    </option>
    
    
    {
    availableVehicles.map(v=>(
    
    <option
    key={v.id}
    value={v.name}
    >
    
    {v.name}
    
    </option>
    
    ))
    }
    
    
    </select>
    
    
    
    
    
    <select
    
    {...register("driver")}
    
    className="input"
    
    >
    
    
    <option>
    
    Select Driver
    
    </option>
    
    
    {
    availableDrivers.map(d=>(
    
    <option
    key={d.id}
    value={d.name}
    >
    
    {d.name}
    
    </option>
    
    ))
    }
    
    
    </select>
    
    
    
    
    
    <input
    
    type="number"
    
    placeholder="Cargo Weight"
    
    {...register(
    "cargoWeight",
    {
    valueAsNumber:true
    }
    )}
    
    className="input"
    
    />
    
    
    
    
    <input
    
    type="number"
    
    placeholder="Planned Distance"
    
    {...register(
    "distance",
    {
    valueAsNumber:true
    }
    )}
    
    className="input"
    
    />
    
    
    
    <button
    
    className="
    bg-blue-600
    text-white
    px-5
    py-2
    rounded-lg
    "
    
    >
    
    Create Trip
    
    </button>
    
    
    
    </form>
    
    )
    
    }