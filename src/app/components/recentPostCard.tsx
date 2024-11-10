import React from "react";
import { Heebo } from "next/font/google";

const heebo = Heebo({subsets:['latin']})
 const RecentPostCard = () => {
    return (
        <div className=" w-[100%] md:w-[483px] md:h-[356px] bg-white flex  items-center ">
                <div className=" mx-auto  md:w-[391px] h-[286px] flex flex-col items- start justify-between">
                    <h2 className={`${heebo.className} font-bold text-[26px]`}>Making a design system from scratch</h2>
               
                <div className="w-[80%] md:w-[301.28 px] h-[42.12px] flex items-start justify-between gap-4">
                  <p  className={`${heebo.className} text-[10px] md:text-[18px] font-normal 
                  text-black/70`}>12 Feb 2024</p>
                  <p className={`${heebo.className} text-[10px] md:text-[18px] font-normal 
                  text-black/70`}> | </p>
                  <p  className={`${heebo.className} text-[10px] md:text-[18px] font-normal 
                  text-black/70`}> Design, Pattern</p>
                  </div>
                  <p> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat
                     sunt nostrud amet.</p> 
                </div>
            </div>  
    )
}
export default RecentPostCard