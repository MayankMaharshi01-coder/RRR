import React from 'react';
import { Link } from 'react-router-dom';
import Slidebar from './Slidebar';

const Cards = (props) => {

    return (
        <>
        <div className=" gap-5 sm:m-5 border border-gray-100 w-[350px] bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-110 m-5 transform  hover:-translate-y-0.5 font-serif transition-all duration-700 h-fit flex justify-center flex-col items-center">
          
            <img 
              src={props.thumbnail} 
              alt={props.schoolName} 
              className="sm:p-5 w-full max-h-1/2 object-contain bg-gray-50 rounded-xl"
            />
            <p className="text-3xl font-serif text-center font-bold text-green-800">{props.title}</p> 
            <h3 className="text-3xl font-serif text-center font-bold text-green-800">{props.availability}</h3>
            <Link to={"/productEdit/" + props._id} className='bg-green-700 mb-11 hover:bg-green-800 text-white font-bold py-2 px-8 text-2xl rounded-lg'>Edit Product</Link>
        </div>
        </>
    );
};

export default Cards;
