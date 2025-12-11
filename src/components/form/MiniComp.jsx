import React from "react";
import { FaCheckSquare } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";



export function AlertPopup({message, type, from}) {
    return(
        <div className="bg-gray-200 border-3 border-green-800 absolute top-[4%] left-[50%] transform-[translateX(-50%)] animate-ping w-[323px] h-[71px] z-10 flex items-start pt-2 pl-2 rounded-[6px] gap-3 shadow-xl animate-popup invisible">
        {type === "error" ? <MdErrorOutline className=" text-[34.5px] text-red-800" /> : <FaCheckSquare className=" text-[34.5px] text-green-800"/>}
        <div className="self-center flex items-center flex-col">
        <h2 className="font-semibold text-[20px]">{from === "signIn" && "Successfully Signned" || message}</h2>
        <span className="text-[14px]">{from === "signIn" && "Now You Can Login"}</span>
        </div>
        </div>
    )
}