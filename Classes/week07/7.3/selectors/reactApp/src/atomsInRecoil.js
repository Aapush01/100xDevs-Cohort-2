import {atom, selector} from "recoil";

export const networkAtom = atom({
   key: "networkAtom",
   default: 102
})
export const jobsAtom = atom({
   key: "jobsAtom",
   default: 0
})
export const notificationkAtom = atom({
   key: "notificationAtom",
   default: 0
})
export const messagingAtom = atom({
   key: "messagingAtom",
   default: 12
})

//lets create a selector

export const totalNotificationSelector = selector({
    key:"totalNotificationSelector",
    get: ({get}) => {
        const networkCount = get(networkAtom);
        const notificationCount = get(notificationkAtom);
        const jobsCount = get(jobsAtom);
        const messagingCount = get(messagingAtom);
        
        return networkCount + notificationCount + jobsCount + messagingCount;

    }
})
