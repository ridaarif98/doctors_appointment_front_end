import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { userLogin } from '../../redux/user/login';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');
  const [success, setSuccess] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const newState = useSelector((state) => state.loginSessionsReducer);

  const handleChange = (e) => {
    const input = e.target;
    const newvalue = input.value;
    switch (input.name) {
      case 'email':
        setEmail(newvalue);
        return email;

      case 'password':
        setPassword(newvalue);
        return password;

      default:
        return 'yes';
    }
  };

  const handleSubmit = (e) => {
    const form = e.target;
    e.preventDefault();
    form.reset();

    dispatch(userLogin(email, password));

    if (newState.status === 200) {
      setSuccess(newState.fetchedData.message);
      navigate('/home');
    } else {
      setErrors(newState.fetchedData.error);
    }
  };

  return (
    <div className="login-container">
      <Link to="/">Home</Link>
      <h2>Login</h2>
      <p>{errors}</p>
      <p>{success}</p>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Enter your email"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={handleChange}
          required
        />
        <input
          type="submit"
          value="Login"
        />
      </form>
    </div>
  );
};

export default Login;
