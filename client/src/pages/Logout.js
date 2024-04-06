import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// Import the useGlobalProductContext hook properly
import { useGlobalProductContext } from '../context/productContext';

const Logout = () => {
  const { logouttoken } = useGlobalProductContext();
  const navigate = useNavigate();

  useEffect(() => {
    // Call logouttoken when the component mounts
    logouttoken();
    // Redirect to '/' after logout
    navigate('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array ensures this effect runs only once

  // This component should not return navigate('/'); directly, use useEffect for side-effects
  return null; // or render a loading/spinner if needed
};

export default Logout;
