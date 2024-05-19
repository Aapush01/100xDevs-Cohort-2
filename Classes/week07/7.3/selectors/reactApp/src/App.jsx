 
import { RecoilRoot, useRecoilValue } from 'recoil'
import './App.css'
import { jobsAtom, messagingAtom, networkAtom, notificationkAtom } from './atomsInRecoil'
import { useMemo } from 'react';

function App() {
  //  const notificationCount = useRecoilValue(notificationkAtom)
  return <RecoilRoot>
    <MainApp/>
  </RecoilRoot>
   

}

function MainApp(){
    const notificationCount = useRecoilValue(notificationkAtom);
    const messagingCount = useRecoilValue(messagingAtom);
    const jobsCount = useRecoilValue(jobsAtom);
    const networkCount = useRecoilValue(networkAtom);

    //one way of doing this.

    const totalNotificationCount = useMemo(() => {
      return notificationCount + messagingCount + jobsCount + networkCount
    }, notificationCount , messagingCount , jobsCount , networkCount)  
     
   

   return (
    
    <>
       <div className="container">
       <button>Home</button>
       <button>My Networks({networkCount >= 100 ? "99+" : networkCount})</button>
       <button>Jobs({jobsCount})</button>
       <button>Messaging({messagingCount})</button>
       <button>Notification({notificationCount})</button>
       <button>Me({totalNotificationCount})</button>
       </div>
        <div className="about">
          <p>Here I will learn about Atom and selectors in Recoil</p>
        </div>
    </>
  )
}

export default App
