import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup =() =>{
    const [data,setData ] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:""
    });
    const [error,setError ] = useState("");
    const navigate = useNavigate();

    const handleChange = ({ currentTarget:input }) => {
        setData({...data,[input.name]:input.value });
    };
    const handleSubmit = async(e) =>{
        e.preventDefault();
        try {
            const url = "http://localhost:8080/api/users";
            const { data:res } = await axios.post(url,data);
            navigate("/login");
            console.log(res.message);
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
            <div className="row mt-5">
                <div className="col-12 col-sm-5">
                    <h1>Welcome Back</h1>
                    <Link to="/login">
                        <button type='button' className="btn btn-primary">
                            Sign in
                        </button>
                    </Link>
                </div>
                <div className="col-12 col-sm-7">
                    <form className="" onSubmit={handleSubmit}>
                        <h1>Create Account</h1>
                        <div className='mb-3'>
                            <label for="firstName" class="form-label">First Name</label>
                            <input
                            type="text"
                            placeholder='First Name'
                            name='firstName'
                            onChange={handleChange}
                            value={data.firstName}
                            required
                            className="form-control"
                        />
                        </div>
                        
                        <div className='mb-3'>
                            <label for="lastName" class="form-label">Last Name</label>
                            <input
                            type="text"
                            placeholder='Last Name'
                            name='lastName'
                            onChange={handleChange}
                            value={data.lastName}
                            required
                            className="form-control"
                        />
                        </div>

                        <div className='mb-3'>
                            <label for="email" class="form-label">Email</label>
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
                        <button type="submit" className="btn btn-secondary">
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Signup;