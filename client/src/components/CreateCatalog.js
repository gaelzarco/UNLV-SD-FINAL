import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CreateCatalog() {

    const navigate = useNavigate()

    const [ product, setProduct ] = useState({
        name: '',
        price: 0,
        image: '',
        description: ''
    })

    async function handleSubmit(e) {
        e.preventDefault()
    
        await fetch('http://localhost:5000/catalog', {
          method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
        })
    
        navigate('/catalog')
      }

    return (
        <main>
            <h1>Create a Product</h1>
            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='name'>Name of Product</label>
                    <input
                        type='text'
                        name='name'
                        id='name'
                        value={product.name}
                        onChange={e => setProduct({ ...product, name: e.target.value })}
                        required
                    />
                    <label htmlFor='price'>Price in USD</label>
                    <input
                        type='text'
                        name='price'
                        id='price'
                        value={product.price}
                        onChange={e => setProduct({ ...product, price: parseInt(e.target.value) })}
                        required
                    />
                    <label htmlFor='image'>Image Address</label>
                    <input
                        type='text'
                        name='image'
                        id='image'
                        value={product.image}
                        onChange={e => setProduct({ ...product, image: e.target.value })}
                        required
                    />
                    <label htmlFor='description'>Description</label>
                    <textarea
                        type='text'
                        name='description'
                        id='description'
                        value={product.description}
                        onChange={e => setProduct({ ...product, description: e.target.value })}
                        required
                    />
                    <input type='submit'/>
                </form>
            </div>
        </main>
    );
}

export default CreateCatalog