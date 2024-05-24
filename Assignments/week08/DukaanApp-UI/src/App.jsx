import React from 'react'
import { RevenueCard } from './components/RevenueCard'
 
 
 
 const App = () => {
   return (
     <div> 
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
      <RevenueCard title={"Next payout"} amount={"2,312.23"} orderCount={23}  />
      <RevenueCard title={"Amount pending"} amount={"93,312.20"} orderCount={13}  />
      <RevenueCard title={"Amount processed"} amount={"93,312.20"}  />
       

      </div>
    
       


     </div>
   )
 }
 
 export default App