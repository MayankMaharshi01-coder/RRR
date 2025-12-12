import React from 'react'
import DeveloperCards from '../components/DeveloperCard';
const photo1 = '/images/pic1.jpg';
const photo2 = '/images/pic2.jpg';
const photo3 = '/images/pic3.jpg';
const photo4 = '/images/pic4.jpg';
const photo5 = '/images/pic5.jpg';

const Developer = () => {
  return (
  <>
    <div className='bg-green-100 '>
      
     <div className='flex justify-center'>
       <h1 className='font-bold text-red-800 text-5xl  mt-18 font-serif'>! - Mentor - !</h1>
     </div>
    <div className='flex justify-around'>
       <DeveloperCards name='Gaurav Sharma' post='Computer Instructor' image={photo1}/>
    </div>
    <div className='flex flex-col lg:flex-row items-center justify-center'>
       <h1 className='font-bold text-red-800 text-5xl  mt-18 font-serif'>- - - -Our Team- - - -</h1>
     </div>
    <div className='flex flex-col xl:flex-row flex-wrap justify-around p-10'>
       <DeveloperCards name='Mayank Sharma'  post='Web Developer'image={photo2} />
       <DeveloperCards name='Aashish Pareek'   post='Web Developer' image={photo3}/>
        <DeveloperCards name='Mohit Darji' post='Web Developer'image={photo4}/>
       
    </div>
    <div className='flex flex-col xl:flex-row justify-around pb-20 p-10'>
        <DeveloperCards name='Neha Goyal' post='Web Developer'image={photo5}/>
        <DeveloperCards name='Tansukh'  post='Web Developer'  image={photo5}/>
    </div>
    
    </div>

    </>
  )
}

export default Developer