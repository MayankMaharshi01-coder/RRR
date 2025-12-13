import React, { useContext, useState, useEffect } from "react";
import SelectSchool from "../components/SelectSchool";
import Slidebar from "../components/Slidebar";
import { AllProductsData } from "../context/AllProducts";
import SchoolLoginForm from "../components/form/SchoolLoginForm";
import { getSchoolProducts } from "../components/form/api"; 
import Cards from "../components/Cards";
const YourSchool = ({ auth, showAlert }) => {
const [schoolDataList2, setSchoolDataList2] = useState([]);
const schoolDataList = useContext(AllProductsData);
// console.log("School Data List 2:", schoolDataList2);
  // const schoolDataList =  [
  //   {
  //     id: 1,
  //     imgUrl: "https://image.hm.com/assets/hm/fb/1e/fb1ec5f3e79a3009b91bc9f12dc45156f01ded57.jpg?imwidth=768",
  //     category: "T-shirt",
  //     schoolName: "Govt. Sr. Sec. School, Churu",
  //     description: " It is a awesome product."
  //   },
  //   {
  //      id: 2,
  //     imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe3aK93-MIcwNaodkc66Sdy723OTBN2Epz8g&s",
  //     category: "T-shirt",
  //     schoolName: "Bal Mandir Sr. Sec. School, Churu",
  //     description:" It is a awesome product."
  //   },
  //   {
  //      id: 3,
  //     imgUrl: "https://img.freepik.com/premium-vector/old-book-white_87946-1711.jpg",
  //     category: "Book",
  //     schoolName: "Govt. Sr. Sec. School, Ratangarh",
  //     description:" It is a awesome product."
  //   },
  //   {
  //       id: 4,
  //     imgUrl: "https://www.flatspot.com/cdn/shop/products/simple-os-shoes-chocolate-7_1300x1500_crop_center.progressive.jpg?v=1648226050",
  //     category: "Shoes",
  //     schoolName: "Bal Mandir Sr. Sec. School, Ratangarh",
  //     description:" It is a awesome product."
  //   },
  //   {
  //        id: 5,
  //     imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFor6CDjURiWu8ESSKM_ulurZ5pj602h4pfg&s",
  //     category: "School Bag",
  //     schoolName: "Govt. Sr. Sec. School, Sujangarh",
  //     description:" It is a awesome product."
  //   },
  //   {
  //         id: 6,
  //     imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6v5SbBcLqbOIaX0N7jAwoU9e1RsmtSD7Atg&s",
  //     category: "Book",
  //     schoolName: "Bal Mandir Sr. Sec. School, Sujangarh",
  //     description:" It is a awesome product."
  //   },
  //   {
  //          id: 7,
  //     imgUrl: "https://matrixbags.com/wp-content/uploads/2024/12/IMG_1457-600x871.jpeg",
  //     category: "School Bag",
  //     schoolName: "Govt. Sr. Sec. School, Taranagar",
  //     description:" It is a awesome product."
  //   },
  //   {
  //           id: 8,
  //     imgUrl: "https://www.yourprint.in/new-admin-ajax.php?action=resize_outer_image&cfcache=all&url=med-s3/yP-mplace/Bags/Back_Packs/YPB0BCYY84QL_1.jpg&resizeTo=600",
  //     category: "School Bag",
  //     schoolName: "Bal Mandir Sr. Sec. School, Taranagar",
  //     description:" It is a awesome product."
  //   },
  //   {
  //            id: 9,
  //     imgUrl: "https://surfboardempire.com.au/cdn/shop/files/OSStandardIssue-Black2_1080x.jpg?v=1693439030",
  //     category: "Shoes",
  //     schoolName: "Govt. Sr. Sec. School, Bidasar",
  //     description:" It is a awesome product."
  //   },
  //   {
  //             id: 10,
  //     imgUrl: "https://cdn.exoticindia.com/images/products/thumbnails/t800x600/books-2019-012/mzw718.jpg",
  //     category: "Book",
  //     schoolName: "Adarsh Vidya Mandir, Bidasar",
  //     description:" It is a awesome product."
  //   },
  //   {
  //          id: 11,
  //     imgUrl: "https://matrixbags.com/wp-content/uploads/2024/12/IMG_1457-600x871.jpeg",
  //     category: "School Bag",
  //     schoolName: "Govt. Sr. Sec. School, Sardarshahar",
  //     description:" It is a awesome product."
  //   },
  //   {
  //           id: 12,
  //     imgUrl: "https://www.yourprint.in/new-admin-ajax.php?action=resize_outer_image&cfcache=all&url=med-s3/yP-mplace/Bags/Back_Packs/YPB0BCYY84QL_1.jpg&resizeTo=600",
  //     category: "School Bag",
  //     schoolName: "Seth Moti Lal School, Sardarshahar",
  //     description:" It is a awesome product."
  //   },
  //   {
  //            id: 13,
  //     imgUrl: "https://surfboardempire.com.au/cdn/shop/files/OSStandardIssue-Black2_1080x.jpg?v=1693439030",
  //     category: "Shoes",
  //     schoolName: "Govt. Sr. Sec. School, Rajgarh",
  //     description:" It is a awesome product."
  //   },
  //   {
  //             id: 14,
  //     imgUrl: "https://cdn.exoticindia.com/images/products/thumbnails/t800x600/books-2019-012/mzw718.jpg",
  //     category: "Book",
  //     schoolName: "Tagore Public School, Rajgarh",
  //     description:" It is a awesome product."
  //   },
  // ]
  console.log("School Data List:", schoolDataList);
  useEffect(() => {
  if(auth) {
getSchoolProducts(auth._id).then((products) => {
      setSchoolDataList2(products);
      console.log('Products for school:', products);
    }).catch((err) => {
      console.log('Error fetching products for school:', err);
    });
  }
  }, [auth])

console.log('schooldetail2', schoolDataList2);

  return(
    <>
      <div className="h-screen w-full">
        {auth ?
          <div className="flex flex-row h-full">
            {schoolDataList2 && schoolDataList2.map((schoolData, index) => <Cards key={index} title={schoolData.title} _id={schoolData._id} thumbnail={schoolData.thumbnail} />)}
            </div>
         : <SchoolLoginForm showAlert={showAlert}/>
          }
      </div>
    </>
  )
};

export default YourSchool;