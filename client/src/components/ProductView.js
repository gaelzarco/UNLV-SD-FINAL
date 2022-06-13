import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function ProductView() {
    const [ product, setProduct ] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        const fetchData = async() => {
            const res = await fetch(`http://localhost:5000/catalog/${id}`)
            const resData = await res.json()
            setProduct(resData)
        }
        fetchData()
    },[id])

    const displayProduct = () => {
        if (product) {
            return (
                <div>
                    <h3>{product.name}</h3>
                    <img src={product.image} alt={product.name} width='500'/>
                    <p>{product.description}</p>
                    <h3>${product.price}</h3>
                </div>
            )
        }
    }

    return (
        <div>
            {displayProduct()}
            <button>Add To Cart</button>
        </div>
    )
}

export default ProductView