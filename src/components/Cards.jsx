import React from 'react';

const Cards = (props) => {

    return (
        <div 
          
          className='flex  flex-col shrink-0 w-[300px] p-6 bg-green-700 h-screen rounded-xl shadow-2xl items-center justify-center text-white gap-5'
        >
          
            <img 
              src={props.image} 
              alt={props.name} 
              className="w-32 h-32 object-contain mb-4" 
            />
            <p className="text-3xl font-serif text-center font-bold">{props.name}</p> 
        
            <h3 className="text-lg font-bold mb-4">{props.post}</h3>
            
        
            
        </div>
    );
};

export default Cards;