 import {Link} from "react-router-dom"
import { useAppContext } from "../contexts/AppContext";
 const Header =()=>{
    const {isLoggedIn} =useAppContext();
    return(
        <div className="bg-gray-800 py-6">
            <div className="container mx-auto flex justify-between md:py-10">
                 <span className="text-3xl text-white font-bold tracking--tight">
                    <Link to="/">
                        Holiday.in
                    </Link>
                 </span>
                 <span className="flex space-x-2">
                    {
                        isLoggedIn ? <>
                        <Link to="/my-booking">My Bookings</Link>
                        <Link to="/my-hotels">My Hotels</Link>
                        <button>Sign out</button>
                        </>:
                         <Link to="/sign-in" className="bg-white px-3 flex items-center tex-blue-600 font-bold hover:bg-gray-100 hover:text-black-100">SignIn</Link>

                    }
                   

                 </span>
            </div>
        </div>
    )
}

export default Header;