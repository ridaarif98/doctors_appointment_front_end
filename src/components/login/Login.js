import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../../redux/user/register-login';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const newState = useSelector((state) => state.sessionsReducer);

  useEffect(() => {
    if (newState.status === 200) {
      navigate('/doctors');
    } else if (newState.status !== 200 && newState.status !== '') {
      if (newState.fetchedData.error === 401) {
        setErrors(newState.fetchedData.error);
      } else {
        setErrors(newState.fetchedData.error);
      }
    }
  }, [newState]);

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
  };

  return (
    <section className="login-section">
      <div className="login-container">
        <h2 className="login-title">Login</h2>
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
            type="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={handleChange}
            required
          />
          <input
            type="submit"
            value="Login"
            id="form-submit"
          />
        </form>
        <p className="error">{errors}</p>
      </div>
    </section>
  );
};

export default Login;
