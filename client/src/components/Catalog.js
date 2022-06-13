import { useContext, useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"

function Catalog(props) {

    // const { CurrentUser } = useContext(CurrentUser)
    const [ catalog, setCatalog ] = useState([])

    useEffect(() => {
        const fetchData = async() => {
            const res = await fetch('http://localhost:5000/server')
            const resData = await res.json()
            setCatalog(resData)
            console.log(catalog)
        }
        fetchData()
    },[])

    return (
        <main>
            <h1>Catalog</h1>
        </main>
    );
}

export default Catalog