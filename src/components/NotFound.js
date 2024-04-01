import { Link } from "react-router-dom";

function NotFound() {
    return (
        <>
            <h1>404 Error!! Page not found</h1>
            <h4><Link to="/">Home</Link></h4>
        </>
    )
}

export default NotFound;