const Footer =()=>{
    return(
        <div className="bg-gray-800 py-10 ">
            <div className="container mx-auto  md: flex-col md:py-10 flex justify-between items-center">
                <span className="text-3xl font-bold text-white tracking-tight">
                    Holiday.in
                </span>
                <span className="text-white font-bold flex gap-4 tracking-tight">
                    <p className="cursor-pointer">Privacy</p>
                    <p className="cursor-pointer">Terms&conditions</p>

                </span>

            </div>

        </div>
    )
}

export default Footer;