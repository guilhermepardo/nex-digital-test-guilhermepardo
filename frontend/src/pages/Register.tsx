import React, { SyntheticEvent, useState } from "react";

const Register = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/v1/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name,
                email,
                password
            })
        })

        const content = await response.json();
        console.log('response :>>', content)

    }

    return (
        <div>
            <form onSubmit={submit}>
                <h1 className="h3 mb-3 fw-normal">Please register</h1>
                <input className="form-control" placeholder="Your name" required
                    onChange={e => setName(e.target.value)}
                />
                <input type="email" className="form-control" placeholder="Your email" required
                    onChange={e => setEmail(e.target.value)}
                />
                <input type="password" className="form-control" placeholder="Insert a password" required
                    onChange={e => setPassword(e.target.value)}
                />
                <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Register;