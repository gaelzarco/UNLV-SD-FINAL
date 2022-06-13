import { useState, useEffect } from 'react'
// import { useNavigate } from "react-router-dom"

function Catalog() {

    // const { CurrentUser } = useContext(CurrentUser)
    const [ catalog, setCatalog ] = useState([])

    useEffect(() => {
        const fetchData = async() => {
            const res = await fetch('http://localhost:5000/catalog')
            const resData = await res.json()
            setCatalog(resData)
        }
        fetchData()
    },[])

    console.log(catalog)

    return (
        <main>
            <h1>Catalog</h1>
            {catalog.map((product, index) => {
                return (
                    <div key={index}>
                        <h3>{product.name}</h3>
                        <img src={product.image} alt={product.name} width='200'/>
                        <p>{product.description}</p>
                        <h3>$ {product.price}</h3>
                    </div>
                )
            })}
            <a href='/createcatalog'>Create Product</a>
        </main>
    );
}

export default Catalog