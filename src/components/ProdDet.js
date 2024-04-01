import { useLocation, /*useOutletContext*/ useParams } from "react-router-dom";

function ProdDet() {
    const {id} = useParams();
    const location = useLocation();
    // const prodObj = useOutletContext();
    return (
        <div>
            <h1>Product details page: Product {id}</h1>
            <h4>{JSON.stringify(location.state)}</h4>
        </div>
    )
}

export default ProdDet;