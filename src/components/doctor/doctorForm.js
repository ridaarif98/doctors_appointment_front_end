import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createNewDoctorAction } from '../../redux/mainpage/mainpage';
import '../appointment/appointment.css';

const DoctorForm = () => {
  const [name, setName] = useState('');
  const [fee, setFee] = useState('');
  const [details, setDetails] = useState('');
  const [image, setImage] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const getTarget = e.target;
    const inputValue = getTarget.value;
    switch (getTarget.name) {
      case 'name':
        setName(inputValue);
        return name;
      case 'fee':
        setFee(inputValue);
        return fee;
      case 'details':
        setDetails(inputValue);
        return details;
      case 'image':
        setImage(inputValue);
        return image;
      default:
        return 'yes';
    }
  };

  const handleSubmit = (e) => {
    const formTarget = e.target;
    e.preventDefault();
    formTarget.reset();
    dispatch(createNewDoctorAction(name, fee, details, image));
    setName('');
    setFee('');
    setDetails('');
    setImage('');
    setTimeout(() => { navigate('/doctors'); }, 1000);
  };

  return (
    <div className="formSet">
      <h3 className="m-5">
        Create new Doctor
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div>
            <input
              type="text"
              className="form-control m-2"
              id="name"
              name="name"
              placeholder="Enter name"
              value={name}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              className="form-control m-2"
              id="fee"
              name="fee"
              placeholder="Enter fee"
              value={fee}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              type="text"
              className="form-control m-2"
              id="details"
              name="details"
              placeholder="Enter doctor details"
              value={details}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              className="form-control m-2"
              id="image"
              name="image"
              placeholder="Enter doctor link image"
              value={image}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="submit"
            value=" Add Doctor"
            className="btn btn-primary m-2 bt-submit"
          />

        </div>
      </form>
    </div>
  );
};

export default DoctorForm;
