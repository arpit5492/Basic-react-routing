import { useLocation /*useOutletContext useParams*/ } from "react-router-dom";

function ProdDet() {
    // const {id} = useParams();
    const location = useLocation();
    const data = location.state;
    // const prodObj = useOutletContext();
    return (
        <div className="card mt-3 shadow-lg" style={{maxWidth: "16rem"}}>
            <img className="card-img-top" style={{height: "250px", width: "250px"}} src={data.img} alt={data.pName}/>
            <div className="card-body text-center">
                <h4 className="card-title">{data.pName}</h4>
                <h5 className="card-text">{data.desc}</h5>
                <h5 className="card-text" style={{fontWeight: "bold"}}>${data.price}</h5>
            </div>
        </div>
    )
}

export default ProdDet;