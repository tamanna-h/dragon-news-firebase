import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    const handleRegister = (e) => {
        e.preventDefault();
        console.log(e.target);
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);
        
    }
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-semibold text-2xl text-center'>Register your account</h2>
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">
                    {/* name */}
                    <label className="label">Name</label>
                    <input type="text" name='name' className="input" placeholder="Name" required/>
                    {/* Photo URL */}
                    <label className="label">Photo URL</label>
                    <input type="email" name='photo' className="input" placeholder="Photo URL" required/>
                    {/* email */}
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" required/>
                    {/* password */}
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" required />
                    <button className="btn btn-neutral mt-4">Register</button>
                    <p className='font-semibold text-center pt-5'>Already have an account? <Link to='/auth/login' className='text-secondary'>Login</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;