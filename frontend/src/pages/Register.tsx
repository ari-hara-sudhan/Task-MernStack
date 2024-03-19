import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import * as apiClient from "../api-client"
import { useAppContext } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";
export type RegisterForm ={
    firstname:string,
    lastname:string,
    email:string,
    password:string,
    confirmpassword:string,
}

const Register =()=>{

    const {showToast} =useAppContext();
    const navigate = useNavigate();

    const {register,watch,handleSubmit ,formState:{errors},}=useForm<RegisterForm>();

    const mutation =useMutation(apiClient.register,{
        onSuccess:()=>{
            showToast({message:"Registration Sucess !", type:"SUCCESS"});
            navigate("/");
        },

        onError:(error:Error)=>{

            showToast({message:error.message, type:"ERROR"})

        }
    })

    const onSubmit =handleSubmit((data)=>{
     
        mutation.mutate(data)

    })

    return(
        <form onSubmit={onSubmit}  className="flex flex-col gap-5 ">
            <h2 className="text-3xl font-bold ">Create a Account</h2>

            <div className="flex flex-col md:flex-row gap-5 ">
                <label className="text-gray-700 font-bold text-sm flex-1 " >
                    FirstName
                    <input className="border rounded w-full py-1 px-2 font-normal" 
                    {...register("firstname",{required :"This filed is required"})}></input>
                    {errors.firstname && <span className="text-red-500">{errors.firstname.message}</span>}
                </label>
                <label className="text-gray-700 font-bold text-sm  flex-1" >
                    Lastname
                    <input className="border rounded w-full py-1 px-2 font-normal" {...register("lastname",{required :"This filed is required"}) }></input>
                    {errors.lastname && <span className="text-red-500">{errors.lastname.message}</span>}
                </label>


            </div>
            <label className="text-gray-700 font-bold text-sm  flex-1" >
                    Email
                    <input type="email" className="border rounded w-full py-1 px-2 font-normal" {...register("email",{required :"This filed is required"}) }></input>
                    {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                </label>
                <label className="text-gray-700 font-bold text-sm  flex-1" >
                    Password
                    <input type="password" className="border rounded w-full py-1 px-2 font-normal" {...register("password",{required :"This filed is required", minLength:{
                        value:6,
                        message:"Password must atlest 6 character"
                    }}) }></input>
                    {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                </label>
                <label className="text-gray-700 font-bold text-sm  flex-1" >
                    ConfirmPassword
                    <input type="password" className="border rounded w-full py-1 px-2 font-normal" {...register("confirmpassword",{
                        validate:(val)=>{
                            if(!val){
                                return "This field is required"
                            }

                            else if(watch("password") !==val){
                                return "Oops password doesn't match"

                            }


                        }
                    }) }></input>
                    {errors.confirmpassword && <span className="text-red-500">{errors.confirmpassword.message}</span>}
                </label>


             <span>
                <button type="submit" className="bg-gray-600 text-white p-2 font-bold hover:bg-blue-500 text-xl">

                    create account

                </button>
             </span>
        </form>
    )
}



export default Register;