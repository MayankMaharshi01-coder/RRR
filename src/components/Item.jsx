import { Link } from "react-router-dom";

export default function Item({
  imgUrl,
  category,
  name,
  description,
  schoolName,
  goodsData,
  id,
  handleClick,
 
}) {
  
  return (
    <div>
      <div className=" gap-5 sm:m-5 border border-gray-100 w-[350px] bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-110 m-5 transform  hover:-translate-y-0.5 font-serif transition-all duration-700">
        <img
          className=" sm:h-64  sm:p-5 w-full h-64 object-contain bg-gray-50 p-5 rounded-xl "
          src={imgUrl || 'https://via.placeholder.com/400x300?text=No+Image'}
          alt={name}
          onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/400x300?text=No+Image'; }}
        />
        <div className="p-4">
          <p className=" sm:text-2xl text-black font-bold text-xl mt-2 tracking-wide  transition duration-200">
          {category}
        </p>
        <p className=" sm:text-xl text-black font-bold text-xl mt-2 tracking-wide  transition duration-200">
          {name}
        </p>
        <h3 className=" sm:text-xl font-semibold text-gray-600 text-base mt-1 tracking-tight">
          {schoolName}
        </h3>
        <h3 className=" sm:text-xl  sm:px-4 font-medium text-gray-700 text-center text-sm px-4 mt-1 line-clamp-2">
          {description}
        </h3>
        <div className="w-full flex items-center justify-center">
        <button onClick={handleClick}
          id={`${imgUrl}&/&/&${description}`}
          className=" sm:text-sm hover:animate-in  sm:py-3  sm:px-6 w-40 sm:w-auto block m-5 text-white font-semibold text-sm text-center py-3 px-5 bg-green-800 rounded-full shadow-md hover:bg-linear-to-r hover:to-green-800  hover:from-green-400 hover:shadow-lg transition  duration-500   cursor-pointer"
        >
          More Details...
        </button>
        </div>
        </div>
      </div>
    </div>
  );
}
