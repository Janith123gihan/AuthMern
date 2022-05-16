import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Signup =() =>{
    const [data,setData ] = useState({
        email:"",
        password:""
    });
    const [error,setError ] = useState("");

    const handleChange = ({ currentTarget:input }) => {
        setData({...data,[input.name]:input.value });
    };
    const handleSubmit = async(e) =>{
        e.preventDefault();
        try {
            const url = "http://localhost:8080/api/auth";
            const { data:res } = await axios.post(url,data);
            localStorage.setItem("token",res.data);
            window.location = "/";
        } catch (error) {
            if(error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
                ){
                    setError(error.response.data.message)
                }
        }
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-7 mt-4">
                    <form className="" onSubmit={handleSubmit}>
                        <h1>Login to Your Account</h1>
                        <div className='mb-3'>
                            <label for="email" class="form-label">Email address</label>
                            <input
                                type="text"
                                placeholder='Email'
                                name='email'
                                onChange={handleChange}
                                value={data.email}
                                required
                                className="form-control"
                            />
                        </div>
                        <div className='mb-3'>
                            <label for="password" class="form-label">Password</label>
                            <input
                            type="text"
                            placeholder='Password'
                            name='password'
                            onChange={handleChange}
                            value={data.password}
                            required
                            className="form-control"
                        />
                        </div>
                        {error && <div className="alert alert-danger">
                            {error}
                            </div>}
                        <button type="submit" className="btn btn-primary">
                            Sign In
                        </button>
                    </form>
                </div>
                <div className="col col-sm-5 mt-4">
                    <h1>New Here?</h1>
                    <Link to="/signup">
                        <button type='button' className="btn btn-secondary">
                            Sign Up
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Signup;