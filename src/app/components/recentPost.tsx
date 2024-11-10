import React from "react";
import Link from "next/link";
import { Heebo } from "next/font/google";
import RecentPostCard from "./recentPostCard";

const heebo = Heebo({subsets:['latin']})
 const RecentPost = () => {
    return (
        <div className="bg-recentBackground my-[66px] md:h-[502px] flex flex-col
        justify-evenly"> 
            <div className="w-[92%]  md:w-[1030px] p-14 mx-auto flex flex-col justify-between">
            <div className="flex flex-row justify-between"> 
            <h2 className={`${heebo.className} text-[22px] font-medium`}> Recent Post</h2>
            <Link href={""} className={`${heebo.className} text-[22px] font-medium text-myPink`}> View all
            </Link>
            </div>
            <div className="mt-[6px] flex flex-col md:flex-row justify-between gap-4"> 
            <RecentPostCard/>
            <RecentPostCard/> 
            </div>
            </div>
          
       
        </div>
    )
 }
 export default RecentPost