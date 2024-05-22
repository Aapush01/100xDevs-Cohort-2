 import React from 'react'
 
 const App = () => {
   return (
     <>
     {/* here try to write a code using a raw CSS and then try to write same code using tailwind. */}
      {/* here I write inline css  */}
     <div style={{display: "flex", justifyContent: "space-around" , fontSize: "30px" }} >
     <div style={{backgroundColor: "pink"}}>MD</div>
     <div style={{backgroundColor: "red"}}>Shahid</div>
     <div style={{backgroundColor: "yellow"}}>Afridi</div>

     </div> 
     <b>Here I use tailwind</b>
     <div className='flex justify-between' >
     <div className='bg-white' >MD</div>
     <div className='bg-zinc-800 text-white' >Shahid</div>
     <div className='bg-slate-50' >Afridi</div>

     </div>
     </>
   )
 }
 
 export default App