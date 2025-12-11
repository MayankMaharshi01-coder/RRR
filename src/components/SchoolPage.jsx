import React, { useState, useEffect, Link } from "react";
import { getSchoolById } from "./form/api";
import { FaBackward } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";

export default function SchoolPage() {

  const [searchParams] = useSearchParams();
  const schoolId = searchParams.get('id');
  const [selectedSchool, setSelectedSchool] = useState();

  useEffect(() => {
    if (schoolId) {
      getSchoolById(schoolId).then((data) => {
        setSelectedSchool(data);
      })
    }
  }, [schoolId]);

  return(
    <>
      <div className=" h-screen w-full flex items-center flex-col mt-14 xl:mt-42">
      <div className="border-2 border-green-800 w-fit xl:border-none xl:bg-transparent bg-white rounded-4xl">
        <div className="xl:flex-row p-10 items-center gap-8 flex flex-col justify-between min-w-full">
        <div className="border-3 border-green-800 w-full xl:w-fit rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-700">
        <img className="rounded-lg" src="https://img.freepik.com/free-vector/large-school-building-scene_1308-32058.jpg?semt=ais_hybrid&w=740&q=80" alt="school image" />
      </div>
      <div className="text-4xl flex flex-col gap-4 font-serif bg-white px-8 py-3 rounded-xl w-full xl:w-fit shadow-xl min-w-2xl hover:shadow-2xl hover:scale-105 transition-all duration-700">
        <h1 className="text-green-800"><span className="text-black">School Name: </span>{selectedSchool?.schoolName}</h1>
        <h1 className="text-green-800"><span className="text-black">Address: </span>{selectedSchool?.address}</h1>
        <h1 className="text-green-800"><span className="text-black">Sub-District: </span>{selectedSchool?.subDistrict}</h1>
        <h1 className="text-green-800"><span className="text-black">School Email: </span>{selectedSchool?.schoolEmail}</h1>
        <h1 className="text-green-800"><span className="text-black">School Number: </span>{selectedSchool?.schoolPhone}</h1>
        <h1 className="text-green-800"><span className="text-black">Incharge Name: </span>{selectedSchool?.inchargeName}</h1>
        <h1 className="text-green-800"><span className="text-black">Incharge Number: </span>{selectedSchool?.inchargePhone}</h1>
      </div>
      </div>
      </div>
      <a href="/schoolContribution" className="bg-white cursor-pointer text-green-800 px-15 xl:mt-27 py-2 mt-7 border-2 shadow-xl border-white-800  inline-flex gap-2 font-semibold text-4xl font-serif items-center transition-all duration-700 rounded-[9px] group hover:text-white hover:bg-green-800"><FaBackward /> GO BACK </a>
    </div>

    </>
  )

}