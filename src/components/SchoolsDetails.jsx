import { useState, useEffect } from "react";
import EachSchoolData from "../components/EachSchoolData";
import { getAllSchool } from "./form/api";
const Topper = "/imges/1st Position.png";

//const schoolsData = [
/*  {
    id: 1,
    name: "Rajkiye Uchh Vidyalay Phoolasar",
    products: 120,
    helpedStudents: 350
  },
  {
    id: 2,
    name: "Govt Sr. Sec. School Nagaur",
    products: 80,
    helpedStudents: 200
  },
  {
    id: 3,
    name: "Girls Sr. Sec. School Jodhpur",
    products: 145,
    helpedStudents: 430
  },
  {
    id: 4,
    name: "Primary School Khejarli",
    products: 60,
    helpedStudents: 150
  },
  {
    id: 5,
    name: "Adarsh Vidya Mandir Bikaner",
    products: 95,
    helpedStudents: 280
  },
  {
    id: 6,
    name: "Govt. Model School Didwana",
    products: 110,
    helpedStudents: 320
  },
  {
    id: 7,
    name: "Kendriya Vidyalaya Barmer",
    products: 170,
    helpedStudents: 500
  },
  {
    id: 8,
    name: "Jawahar Navodaya School Churu",
    products: 130,
    helpedStudents: 390
  },
  {
    id: 9,
    name: "Rajkiye Prathmik School Merta",
    products: 55,
    helpedStudents: 125
  },
  {
    id: 10,
    name: "Govt High School Osian",
    products: 152,
    helpedStudents: 295
  } */
//];

export default function SchoolDetail() {
{/*     const sortData = [...schoolsData].sort((x, y) => y.products - x.products)   */}
    
    const [schoolData, setSchoolData] = useState([]);
    useEffect(() => {
      getAllSchool().then((data)=> {
        setSchoolData(data);
        console.log(data);
      });
      
    }, []);

    return (
        <>
        <div className="md:flex text-2xl hidden mb-6 xl:w-6xl text-green-900 justify-between px-9">
            <h1><span className="pr-6">Sq. No. </span>School Name</h1>
            <div className="border-2 h-9 max-w-0.5 mr-5 border-green-900"></div>
            <h1>Sub District</h1>
            <div className="border-2 h-9 max-w-0.5 mr-5 border-green-900"></div>
            <h1 className="">Address</h1>
          </div>
      {schoolData.map(function ({ id, schoolName, subDistrict, address }, index) {
         
         return <div className="pb-15">
          <a href={`/schoolPage?id=${school._id}`} className="text-3xl xl:py-5 xl:px-16 xl:w-6xl hover:scale-103 hover:shadow-2xl transform transition-all duration-500 text-green-800 flex-col w-full cursor-pointer items-center justify-center flex md:flex-row font-bold font-serif bg-white rounded-md md:justify-between py-3 px-10">
            <h1 className="mx-auto md:m-0"><span className="relative top-0 left-0 md:inline-block md:pr-10">{index + 1}. </span>{school.schoolName}</h1>
            <h1>{school.subDistrict}</h1>
            <span>{school.address}</span>
          </a>
         </div>
        })}
       

{/*          <div>
                {sortData.map(function ({ id, name, products, helpedStudents },index) {
                

               
                <div key={id}>
                <p>{name}</p>
                </div>
          
                 let bg = ""
                 let img =''
                 if (index === 0) {
                     bg = 'bg-yellow-400'
                     img = 'first'
                 } else if (index === 1) {
                     bg = 'bg-gray-300'
                     img = 'second'
                 } else if (index === 2) {
                     bg = 'bg-amber-500'
                     img = 'third'
                 } else {
                     bg = 'bg-white'
                     img = ""
                 }
                 return (<EachSchoolData
                     key={id}
                     name={name}
                     products={products}
                     helpedStudents={helpedStudents}
                     bg={bg}
                     img={img}
                 />)
                })
            
           } 
         </div> */}
        </>
    )
}

