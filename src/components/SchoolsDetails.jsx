import { useState, useEffect } from "react";
import EachSchoolData from "../components/EachSchoolData";
import { getAllSchool, getSchoolLeaderBoard } from "./form/api";
const Topper = "/imges/1st Position.png";

export default function SchoolDetail() {
    
    const [schoolData, setSchoolData] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const [allSchools, leaderboardData] = await Promise.all([
            getAllSchool(),
            getSchoolLeaderBoard(),
          ]);

          const productsMap = new Map(leaderboardData.map(school => [school._id, school.totalProducts, school.helpedStudents]));
 console.log("school data in detail component", allSchools, leaderboardData, productsMap);
          const mergedAndSortedData = allSchools
            .map(school => ({
              ...school,
              totalProducts: productsMap.get(school._id) || 0, 
            }))
            .sort((a, b) => b.totalProducts - a.totalProducts);

          setSchoolData(mergedAndSortedData);
        } catch (error) {
          console.error("Failed to fetch school data:", error);
        }
      };

      fetchData();
    }, []);
   console.log("final school data", schoolData);

    return (
        <>
        <div className="md:flex text-2xl hidden mb-6 xl:w-6xl text-green-900 justify-between px-9">
            <h1><span className="pr-6">Sq. No. </span>School Name</h1>
            <div className="border-2 h-9 max-w-0.5 mr-5 border-green-900"></div>
            <h1>Sub District</h1>
            <div className="border-2 h-9 max-w-0.5 mr-5 border-green-900"></div>
            <h1>Address</h1>
            <div className="border-2 h-9 max-w-0.5 mr-5 border-green-900"></div>
            <h1>Products</h1>
          </div>
        {schoolData.map((school, index) => {
         return <div key={school._id} className="pb-15">
          <a href={`/schoolPage?id=${school._id}`} className="text-3xl xl:py-5 xl:px-16 xl:w-6xl hover:scale-103 hover:shadow-2xl transform transition-all duration-500 text-green-800 flex-col w-full cursor-pointer items-center justify-center flex md:flex-row font-bold font-serif bg-white rounded-md md:justify-between py-3 px-10">
            <h1 className="mx-auto md:m-0"><span className="relative top-0 left-0 md:inline-block md:pr-10">{index + 1}. </span>{school.schoolName}</h1>
            <h1>{school.subDistrict}</h1>
            <span className="hidden md:block">{school.address}</span>
            <h1>{school.totalProducts}</h1>
            <h2>{school.helpedStudents}</h2>
          </a>
         </div>
        })}
        </>
    )
}
