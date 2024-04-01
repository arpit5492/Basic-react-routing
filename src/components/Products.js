import { Link, Outlet } from "react-router-dom";

function Products() {

    const products = [
        {
            pCode: 1, 
            pName: "Apples", 
            price: 1.23,
            desc: "Appy juice",
            img: "https://www.shutterstock.com/image-photo/red-apple-isolated-on-white-600nw-1727544364.jpg"
        },
        {
            pCode: 2, 
            pName: "Bananas", 
            price: 1.45,
            desc: "Banana juice",
            img: "https://media.istockphoto.com/id/173242750/photo/banana-bunch.jpg?s=612x612&w=0&k=20&c=MAc8AXVz5KxwWeEmh75WwH6j_HouRczBFAhulLAtRUU="
        },
        {
            pCode: 3, 
            pName: "Oranges", 
            price: 2.32,
            desc: "Orange juice",
            img: "https://media.istockphoto.com/id/185284489/photo/orange.jpg?s=612x612&w=0&k=20&c=m4EXknC74i2aYWCbjxbzZ6EtRaJkdSJNtekh4m1PspE="
        },
        {
            pCode: 4, 
            pName: "Grapes", 
            price: 4.35,
            desc: "Grapes juice",
            img: "https://t4.ftcdn.net/jpg/02/15/58/91/360_F_215589116_HnImcsgE9htODU7r5tuJR0wFPHcWdpel.jpg"
        },
        {
            pCode: 5, 
            pName: "Kiwi", 
            price: 5.67,
            desc: "Kiwi juice",
            img: "https://images.pexels.com/photos/51312/kiwi-fruit-vitamins-healthy-eating-51312.jpeg?cs=srgb&dl=pexels-pixabay-51312.jpg&fm=jpg"
        }
    ];

    const prodItems = (
        products.map(data => {
            return (
                // <li key={data.pCode}><Link state={data} to={`/products/${data.pCode}`} style={styles}>{data.PName}</Link></li>
                    <div className="card" style={{marginRight: "20px", marginTop: "20px"}} key={data.pCode}>
                        <Link state={data} to={`/products/${data.pCode}`} style={{textDecoration: "none"}}>
                            <img src={data.img} style={{height: "250px"}} alt={data.pName} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{data.pName}</h5>
                                <p className="card-text">{data.desc}</p>
                            </div>
                            <div className="card-footer">
                                <h5 className="card-title">${data.price}</h5>
                            </div>
                        </Link>
                    </div>
                )
            })
        )

    return (
        <div className="card-group">
            {prodItems}
            <Outlet context={products}/>
        </div>
    )
}

export default Products;