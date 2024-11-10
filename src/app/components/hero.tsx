import { Heebo } from "next/font/google";
import Image from "next/image";
import React from "react";


const heebo = Heebo({subsets: ["latin"]})
const Hero = () => {
    return(
        <div className="my-[66px] mx-auto md:w-[1030px] md:h-[308px]  flex  flex-col-reverse 
        md:flex-row
        items-center justify-between p-12"> 
        {/* text div */}
        <div className="w-[95%] md:w-[521px] h-[305px] flex flex-col justify-between
        md:items-start justify-evenly"> 
            <h1 className={`${heebo.className} text-[27px] md:text-[48px] font-black text-myblack`}> Hi, I am Sabeen, <br/>
            Medical Physicist</h1>
            <p  > Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                Velit officia consequat duis enim velit mollit. 
                Exercitation veniam consequat sunt nostrud amet.</p>
            <button className={`${heebo.className}  w-[205px] h-[50px] bg-myPink text-myblack text-[18px] font-medium  
            rounded-sm shadow-md shadow-black/60`} 
            > Download Resume </button>    
            </div>
        {/* image div */}
        <div className="w-[292px] h-[299px] relative "> 
            <Image className="z-50 rounded-full" src={"/assets/abc.png"} alt="abc" width={292} height={299}/>
            <div className=" bg-heroElipse w-[292px] h-[299px] rounded-full absolute top-2 
            right-2 -z-10" />
        </div>
        
        </div>
    )
}
export default Hero