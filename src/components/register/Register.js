import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { userRegister } from '../../redux/user/register';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState('');
  const [success, setSuccess] = useState('')

  const newState = useSelector((state) => state.registerSessionsReducer)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const input = e.target;
    const newvalue = input.value;
    switch (input.name) {
      case "name":
        setName(newvalue);
        return name;
      case "email":
        setEmail(newvalue);
        return email;

      case "password":
        setPassword(newvalue);
        return password;

      case "confirmPassword":
        setConfirmPassword(newvalue);
        return confirmPassword;

      default:
        return "yes";
    }
  };

  const handleSubmit = (e) => {
    const form = e.target;
    e.preventDefault();
    form.reset();
    dispatch(userRegister(name, email, password, confirmPassword));
    
    if(newState.status === 201) {
      setSuccess(newState.fetchedData.message)
      navigate('/home')
    } else {
      setErrors(newState.fetchedData.error)
    }
  }
 
  return (
    <div>
       <Link to="/">Home</Link>
       <h2>Register</h2>
       <p>{errors}</p>
       <p>{success}</p>
       <form onSubmit={handleSubmit}> 
          <input
            type='text'
            name='name'
            placeholder='Enter your name'
            value={name}
            onChange={handleChange}
            required
          />
          <input
            type='email'
            name='email'
            value={email}
            placeholder='Enter your email'
            onChange={handleChange}
            required
          />
          <input
            type='text'
            name='password'
            placeholder='Enter your password'
            value={password}
            onChange={handleChange}
            required
            />
            <input
            type='text'
            name='confirmPassword'
            value={confirmPassword}
            placeholder='confirm your password'
            onChange={handleChange}
            required
            />
          <input type='submit' value='Register' />
       </form>
    </div>
  )
}

export default Register;
