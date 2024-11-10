import { Heebo } from "next/font/google"
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import React from "react";
import Link from "next/link";

 const heebo = Heebo({subsets: ["latin"]})
const Footer = ()=> {
    return (
        <div className=" gap-y-6 bg-footerBackground flex items-center flex-col justify-center h-[243px]">
            <div className="flex gap-x-5">
            <Link href={''}>
            <FaFacebookSquare className="w-[30px] h-[30px]" /> 
            </Link>
            <Link href={''}>
            <FaInstagram className="w-[30px] h-[30px]" /> 
            </Link>
            <Link href={''}>
            <FaTwitter className="w-[30px] h-[30px]" /> 
            </Link>
            <Link href={''}>
            <FaLinkedin className="w-[30px] h-[30px]" />
            </Link> 
            
            </div>
            <p className={`${heebo.className} text-center font-medium text-[22px]`}>
            Copyright ©2024 All rights reserved 
            </p>
        </div>
    )
}
export default Footer