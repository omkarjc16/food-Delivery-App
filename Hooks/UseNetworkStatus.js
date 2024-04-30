import {useState} from "react"
const UseNetworkStatus =()=>{
 const [NetworkStatus ,setNetworkStatus] =useState(true);
    window,addEventListener("offline",()=>{
        setNetworkStatus(false);
    });
    window,addEventListener("online",()=>{
        setNetworkStatus(true);
    })
    return NetworkStatus
}
export default UseNetworkStatus;