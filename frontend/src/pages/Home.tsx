import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {

    interface CustomizedState {
        token: string
        userName: string
      }

    const location = useLocation()
    const state = location.state as CustomizedState
    const [products, setProducts] = useState<any[]>([])

    useEffect(() => {
        (
            async () => {
                const response = await fetch('http://localhost:5000/api/v1/products', {
                    headers: {
                        'Content-Type': 'application/json',
                        'authorization': `Bearer ${state.token}`
                    },
                })
                const content = await response.json();
                setProducts(content.body.products)
            }
        )()
    }, []);

    return (
        <div>
            <div className="card" style={{ width: '25rem' }}>
                <div className="card-header">
                    Hello, { state.userName }, this is your products
                </div>
                <ul className="list-group list-group-flush">

                    {products.map(product => {
                        return (
                            <li className="list-group-item">Name: {product.productName} | Price: {product.price}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Home;