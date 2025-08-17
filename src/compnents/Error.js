import { useRouteError } from "react-router-dom";

const Error = () => {
    const err= useRouteError();
    console.log(err);
    return(
        <div>
            <h1>Oops </h1>
            <h2>What happened?</h2>
            <h3>Something went Wrong</h3>
            <p>{err.status} : {err.statusText}</p>
        </div>
    )
}
 export default Error;