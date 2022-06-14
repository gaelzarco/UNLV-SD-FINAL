import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"

function Cart() {

    const { id } = useParams()
    const [ cart, setCart ] = useState([])

    useEffect(() => {
        const fetchData = async() => {
            const res = await fetch(`http://localhost:5000/cart/${id}`)
            const resData = await res.json()
            setCart(resData)
        }
        fetchData()
    },[id])

    const displayCart = () => {
        if (cart === {}) {
            return (
                <div className='cart-view'>
                    <div className='cart-items'>
                        {cart.products.map((product, index) => {
                            <div key={index}>
                                <h3>{product.name}</h3>
                                <h3>Quantity {product.quantity}</h3>
                            </div>
                        })}
                    </div>
                    <div className='cart-total'>
                        {cart.total}
                    </div>
                </div>
            )
        } else {
            return (
                <h1>Cart is empty!</h1>
            )
        }
    }

    return (
        <main>
            {displayCart()}
        </main>
    );
}

export default Cart