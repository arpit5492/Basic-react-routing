import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate(-1);
        }, 1000);
    })
    return (
        <>
            <h1>404 Error!! Page not found</h1>
        </>
    )
}

export default NotFound;