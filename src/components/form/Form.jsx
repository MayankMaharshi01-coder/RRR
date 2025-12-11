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



        /*<div class="flex items-center justify-center w-screen min-h-[400px] bg-cover bg-center bg-no-repeat rounded-md" style="background-image: url('https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800&auto=format&fit=crop&q=90');">
        </div>
      <form className='flex flex-col gap-6 items-start'></form>*/