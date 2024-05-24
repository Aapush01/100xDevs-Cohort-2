 import React from 'react'
import { RevenueCard } from './components/RevenueCard'
import { AmountProcessed } from './components/AmountProcessed'
 
 
 const App = () => {
   return (
     <div> 
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
      <RevenueCard title={"Next payout"} amount={"2,312.23"} orderCount={23}  />
      <RevenueCard title={"Amount pending"} amount={"93,312.20"} orderCount={13}  />
      <AmountProcessed title={"Amount processed"} amount={"23,92,312.19"}/>

      </div>
    
       


     </div>
   )
 }
 
 export default App