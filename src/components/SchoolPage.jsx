import React, { useState, useEffect, Link } from "react";
import { getSchoolById, getSchoolLeaderBoard } from "./form/api";
import { FaBackward } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";

export default function SchoolPage() {

  const [searchParams] = useSearchParams();
  const schoolId = searchParams.get('id');
  const [selectedSchool, setSelectedSchool] = useState();

  useEffect(() => {
    if (schoolId) {
      const fetchSchoolData = async () => {
        try {
          const [schoolDetails, leaderboardData] = await Promise.all([
            getSchoolById(schoolId),
            getSchoolLeaderBoard(),
          ]);

          const schoolFromLeaderboard = leaderboardData.find(school => school._id === schoolId);
          const totalProducts = schoolFromLeaderboard ? schoolFromLeaderboard.totalProducts : 0;

          setSelectedSchool({ ...schoolDetails, totalProducts });
        } catch (error) {
          console.error("Failed to fetch school details:", error);
        }
      };
      fetchSchoolData();
    }
  }, [schoolId]);

  return(
    <>
      <div className=" h-screen w-full flex items-center flex-col pt-14 xl:pt-42">
      <div className="border-2 border-green-800 max-w-xl max-h-fit md:max-w-fit grow xl:border-none xl:bg-transparent bg-white rounded-4xl">
        <div className="xl:flex-row p-10 items-center gap-8 flex flex-col justify-between min-w-full">
        <div className="border-3 border-green-800 max-w-3xl shrink xl:w-fit rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-700">
        <img className="rounded-lg" className="min-w-[450px]" src={`http://localhost:3000/${selectedSchool?.schoolImage}`} alt="school image" />
      </div>
      <div className="md:text-4xl flex flex-col gap-4 font-serif bg-white px-8 py-3 rounded-xl xl:w-fit shadow-xl min-w-[500px] md:min-w-2xl hover:shadow-2xl hover:scale-105 transition-all duration-700">
        <h1 className="text-green-800"><span className="text-black">School Name: </span>{selectedSchool?.schoolName}</h1>
        <h1 className="text-green-800"><span className="text-black">Address: </span>{selectedSchool?.address}</h1>
        <h1 className="text-green-800"><span className="text-black">Sub-District: </span>{selectedSchool?.subDistrict}</h1>
        <h1 className="text-green-800"><span className="text-black">School Email: </span>{selectedSchool?.schoolEmail}</h1>
        <h1 className="text-green-800"><span className="text-black">School Number: </span>{selectedSchool?.schoolPhone}</h1>
        <h1 className="text-green-800"><span className="text-black">Incharge Name: </span>{selectedSchool?.inchargeName}</h1>
        <h1 className="text-green-800"><span className="text-black">Incharge Number: </span>{selectedSchool?.inchargePhone}</h1>
        <h1 className="text-green-800"><span className="text-black">Total Products: </span>{selectedSchool?.totalProducts}</h1>
        <h1 className="text-green-800"><span className="text-black">Helped Students: </span></h1>
      </div>
      </div>
      </div>
      <a href="/schoolContribution" className="bg-white cursor-pointer text-green-800 px-15 xl:mt-27 py-2 mt-7 border-2 shadow-xl border-white-800  inline-flex gap-2 font-semibold text-4xl font-serif items-center transition-all duration-700 rounded-[9px] group hover:text-white hover:bg-green-800"><FaBackward /> GO BACK </a>
    </div>

    </>
  )

}