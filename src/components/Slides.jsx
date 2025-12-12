import React from 'react'

const Slides = (props) => {
  return (
      <div 
          
          className='flex fade-in flex-col shrink-0 w-[300px] h-[400px] p-6 bg-blue-400 rounded-xl shadow-2xl items-center justify-center text-white gap-5'
        >
          
            <img 
              src={props.image} 
              alt={props.name} 
              className="w-32 h-32 object-contain mb-4" 
            />
            <p className="text-3xl font-serif text-center font-bold">{props.name}</p> 
        
            <h3 className="text-lg font-bold mb-4">{props.post}</h3>
            
        
            
        </div>
  )
}

export default Slides