import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"

function Catalog() {

    // const { CurrentUser } = useContext(CurrentUser)
    const navigate = useNavigate()

    const [ catalog, setCatalog ] = useState([])

    useEffect(() => {
        const fetchData = async() => {
            const res = await fetch('http://localhost:5000/catalog')
            const resData = await res.json()
            setCatalog(resData)
        }
        fetchData()
    },[])

    return (
        <main>
            <h1>Catalog</h1>
            {catalog.map((product, index) => {
                return (
                    <a 
                    href={`/catalog/product/${product._id}`}
                    key={index}
                    >
                        <div>
                            <h3>{product.name}</h3>
                            <img src={product.image} alt={product.name} width='200' />
                        </div>
                    </a>
                )
            })}
            <a href='/catalog/create'>Create Product</a>
        </main>
    );
}

export default Catalog