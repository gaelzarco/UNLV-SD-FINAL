import { useContext, useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
// import { useNavigate } from "react-router-dom"
import { CurrentUser } from "../contexts/CurrentUser"

function ProductView() {
    const [ product, setProduct ] = useState(null)
    const [ quantity, setQuantity ] = useState(0)
    const { id } = useParams()
    const { currentUser } = useContext(CurrentUser)
    console.log(currentUser)

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
                <div className='product-view'>
                    <h3 id='prod-name'>{product.name}</h3>
                    <img id='prod-image' src={product.image} alt={product.name} width='350'/>
                    <p id='prod-desc'>{product.description}</p>
                    <h3 id='prod-price'>${product.price}</h3>
                </div>
            )
        }
    }

    return (
        <div>
            {displayProduct()}
            <div className='cartsubmit'>
                <div className='total'>
                    <h4>Quantity</h4>
                    <h4>{quantity}</h4>
                </div>
                <div className='btn-total'>
                    <button onClick={() => {setQuantity(quantity - 1)}}> - </button>
                    <button onClick={() => {setQuantity(quantity + 1)}}> + </button>
                </div>
                <button>Add To Cart</button>
            </div>
        </div>
    )
}

export default ProductView