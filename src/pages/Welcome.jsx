import React, { useContext, useRef, useState } from "react";
import { AllProductsData } from "../context/AllProducts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Welcome() {
  const products = useContext(AllProductsData);
  const [selectedSchool, setselectedSchool] = useState("default");
  const val = useRef(true);
  const schoolName = useRef([]);
  console.log(products);
  gsap.registerPlugin(useGSAP);
  const { contextSafe } = useGSAP();

  products.forEach((item) => {
    if (!schoolName.current.includes(item.schoolName)) {
      schoolName.current.push(item.schoolName);
    }
  });
  console.log(schoolName);
  val.current = false;

  const handleClick = contextSafe(() => {
    console.log("Button Clicked");
    const tl = gsap.timeline();
    tl.to(".welcomePage", {
      duration: 1,
      ease: "power2.inOut",
      y: "100%",
      display: "none",
      rotateX: 90,
      pointerEvents: "none",
    });
    tl.to(".schoolselecter", {
      duration: 1,
      rotateZ: 0,
      ease: "power2.inOut",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      display: "flex",
    });
  });
  return (
    <>
      <div className="relative overflow-x-hidden">
        <div className="welcomePage min-h-screen flex items-center justify-center bg-[#f0f8ef]">
          <button
            onClick={handleClick}
            className=" bg-green-800 text-green-100 text-6xl px-40 py-9 rounded-full font-bold font-serif"
          >
            Get Started
          </button>
        </div>
        <div className="schoolselecter origin-bottom hidden rotate-z-90 top-0 z-999 min-h-screen w-screen p-0 m-o overflow-hidden items-center justify-center bg-[#54c246]">
          <select
            ref={val}
            value={selectedSchool}
            onChange={(e) => {
              setselectedSchool(e.target.value);
              localStorage.removeItem("schoolName");
              localStorage.setItem("schoolName", e.target.value);
              window.location.href = "/home";
            }}
            className="mt-20 p-4 rounded-lg text-3xl font-serif border-2 font-bold outline-none"
          >
            <option value="default">Select Your School</option>
            {schoolName.current.map((school, index) => (
              <option key={index} value={school}>
                {school}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}
