import React, { SyntheticEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/v1/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email,
                password
            })
        })

        const content = await response.json();

        if (content.statusCode === 200) {
            navigate('/products', {state: {
                token: content.body.token,
                userName: content.body.name
            }})
    }

    }

    return (
        <div>
            <form onSubmit={submit}>
                <h1 className="h3 mb-3 fw-normal">Please login</h1>
                <div className="form-floating">
                    <input type="email" className="form-control" placeholder="name@example.com" required
                    onChange={e => setEmail(e.target.value)}
                />
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" placeholder="Password" required
                    onChange={e => setPassword(e.target.value)}
                />
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;