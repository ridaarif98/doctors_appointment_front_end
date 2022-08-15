import { React, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getDoctor } from '../redux/mainpage/mainpage';

const Doctor = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDoctor());
  }, []);
  return <></>;
};

export default Doctor;