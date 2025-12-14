import React from "react";

function Form({children, onSubmit, className}) {
return(
     <form onSubmit={onSubmit} method="post" className={`
     bg-[#D9E4DD]
     shadow-2xl
     inline-flex 
     pb-20
     w-screen
     flex-col
     md:w-[500px]
     lg:w-[600px]
     gap-6
     pt-8
     items-center
     rounded-[9px]
      ${className}
   ` }>{children}</form>
)
};

export default Form;