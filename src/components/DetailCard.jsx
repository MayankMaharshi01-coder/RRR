import React from "react";
import { ImCross } from "react-icons/im";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const DetailCard = ({ detailCard }) => {
  console.log(detailCard);
  gsap.registerPlugin(useGSAP);
  const { contextSafe } = useGSAP();

  

  const fun = contextSafe(() => {
    
     document.body.classList.remove("no-scroll");

    gsap.to(".cardOfDetailProduct", {
      display: "none",
      opacity: 0,
    });
  });
  return (
    <div
      className={`hidden fixed top-[15vh] left-[15vw]  opacity-0 max-w-6xl cardOfDetailProduct w-[80vw] lg:min-w-96 min-h-fit lg:gap-11  border-4 rounded-4xl bg-linear-to-b  flex-col lg:flex-row bg-[#f0f8ef] p-10  items-center  overflow-y-auto gap-4 z-50`}
    >
      <ImCross onClick={fun} className="absolute top-5 left-6 cursor-pointer text-4xl " />
      <div className="min-w-1/2 max-w-1/2">
        <img src={`${detailCard.imgUrl}`} className="h-fit w-full" alt="" />
      </div>
      <div className="flex gap-10 flex-col md:flex-row lg:flex-col text-green-900 font-serif justify-around lg:gap-20">
      <div className="flex flex-col gap-2 items-start">
        <div className="2xl:text-5xl text-4xl flex items-center justify-center gap-2 font-extrabold">
          <p className="inline border-gray-700 rounded">
            product details{" "} :-
          </p>
        </div>
        <h2 className="text-3xl font-extrabold">{detailCard.category}</h2>
        <h2 className="text-2xl font-extrabold">{detailCard.name}</h2>
        <p className="text-3xl text-gray-600 font-semibold">{detailCard.description}</p>
      </div>
      <div className="flex flex-col gap-2 items-start">
        <div className="2xl:text-5xl text-4xl font-extrabold">
          <p className="inline border-gray-700 rounded p-1">
            school details :-
          </p>
        </div>
        <div>
          <p className="text-2xl font-extrabold "> School name :- </p>
          <p className="inline text-xl">{detailCard.schoolName}</p>
        </div>
        <div>
          <p className="text-2xl font-extrabold ">
            {" "}
            School incharge name :-{" "}
          </p>
          <p className="inline text-xl">MD shankhala</p>
        </div>
        <div>
          <p className="text-2xl font-extrabold ">
            {" "}
            Incharge phone number :-{" "}
          </p>
          <p className="inline text-xl">283772890193</p>
        </div>
        <div>
          <p className="text-2xl font-extrabold"> School's addres :- </p>
          <p className="inline text-xl">
            <a href=""> adress name</a>
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default DetailCard;
