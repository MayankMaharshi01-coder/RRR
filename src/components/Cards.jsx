import React from 'react';
import { Link } from 'react-router-dom';
const Cards = (props) => {
console.log('prop', props);

    return (
        <div 
          
          className='flex  flex-col shrink-0 w-[300px] p-6 bg-green-400 max-h-2/4 rounded-xl shadow-2xl items-center justify-center text-white gap-5'
        >
          
            <img 
              src={props.thumbnail} 
              alt={props.schoolName} 
              className="w-32 h-32 object-contain mb-4" 
            />
            <p className="text-3xl font-serif text-center font-bold text-green-800">{props.title}</p> 
        
            <h3 className="text-lg font-bold text-green-900 mb-4">{}</h3>
            <Link to={"/productEdit/" + props._id} className='bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded'>edit Details</Link>
        
            
        </div>
    );
};

export default Cards;