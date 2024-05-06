import { useRouteError } from "react-router-dom";
const Error =()=>{
    const error =useRouteError();
    return(
        <div className="ErrorMessage">
          <h1>{error.data}</h1>
          <h4>{error.status +" "+error.statusText}</h4>  
        </div>
    )
}
export default Error;