import { Link, Outlet } from "react-router-dom";

function Products() {

    const products = [
        {pCode: 1, PName: "Apples", price: 1.23},
        {pCode: 2, PName: "Bananas", price: 1.45},
        {pCode: 3, PName: "Oranges", price: 2.32},
        {pCode: 4, PName: "Grapes", price: 4.35},
        {pCode: 5, PName: "Kiwi", price: 5.67}
    ];

    const styles = {
        textDecoration: "none",
        marginRight: "2rem",
        fontSize: "18px",
    };

    const prodItems = (
        products.map(data => {
            return (
                <li key={data.pCode}><Link state={data} to={`/products/${data.pCode}`} style={styles}>{data.PName}</Link></li>
            )
        })
    )

    return (
        <div>
            <ul>
                {prodItems}
            </ul>
            <Outlet context={products}/>
        </div>
    )
}

export default Products;