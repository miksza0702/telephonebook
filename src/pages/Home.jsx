import React from "react";
import {HiMenuAlt1} from "react-icons/hi";
import li
const Home=()=>{
    return(
        <section className="flex gap-10">
            <div className="bg-[#0c4594]  min-h-screen w-80">
                <div className="py-3 flex justify-end">
                <HiMenuAlt1 size={30} className="mr-5 cursor-pointer text-gray-200"/>
                </div>
                <div>
               
                    <h2 className= "text-gray-200 font-semibold ml-5">Dashboard</h2>
                
                </div>
            </div>
            <div>
                <h2>123</h2>
            </div>
        </section>
    )
}
export default Home;