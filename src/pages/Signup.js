import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Signup = () => {
  const [user, setUser] = useState({
    fname: '',
    email: '',
    mobile: '',
    password: '',
    cpassword: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', user);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <Wrapper>
      <section>
        <div className="sign_container">
          <div className="sign_form">
            <form onSubmit={handleSubmit}>
              <h1>Create account</h1>
              <div className="form_data">
                <label htmlFor="fname">Your name</label>
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  value={user.fname}
                  onChange={handleInput}
                />
              </div>
              <div className="form_data">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={user.email}
                  onChange={handleInput}
                />
              </div>
              <div className="form_data">
                <label htmlFor="mobile">Mobile number</label>
                <input
                  type="tel"
                  name="mobile"
                  id="mobile"
                  value={user.mobile}
                  onChange={handleInput}
                />
              </div>
              <div className="form_data">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={user.password}
                  onChange={handleInput}
                  placeholder="At least 6 characters"
                />
              </div>
              <div className="form_data">
                <label htmlFor="cpassword">Confirm Password</label>
                <input
                  type="password"
                  name="cpassword"
                  id="cpassword"
                  value={user.cpassword}
                  onChange={handleInput}
                />
              </div>
              <button type="submit" className="signin_btn">
                Continue
              </button>
              {/* Divider component or line */}
              <hr className="divider" />
              <div className="signin_info">
                <p>Already have an account?</p>
                <NavLink to="/login">Sign in</NavLink>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  section {
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .sign_container {
    width: 85%;
    max-width: 400px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .sign_form h1 {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 20px;
    text-align: center;
  }

  .form_data {
    margin-bottom: 15px;
  }

  .form_data label {
    font-weight: 600;
    display: block;
    margin-bottom: 5px;
  }

  .form_data input {
    width: 100%;
    height: 36px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    outline: none;
  }

  .signin_btn {
    width: 100%;
    padding: 10px;
    background-color: #f3d078;
    border: 1px solid #9c7e31;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 600;
    color: #111;
    cursor: pointer;
  }

  .divider {
    margin: 20px 0;
    border: none;
    height: 1px;
    background-color: #ccc;
  }

  .signin_info {
    text-align: center;
    font-size: 14px;
  }

  .signin_info p {
    margin-bottom: 10px;
  }

  .signin_info a {
    color: #0066c0;
    text-decoration: none;
    font-weight: 600;
  }
`;

export default Signup;
