import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
const {useGlobalProductContext} = require('../context/productContext')


const Login = () => {
    const {setTokeninLs} = useGlobalProductContext();
    const navigate = useNavigate()
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

        const handleInput =(e)=>{
            let name = e.target.name
            let value = e.target.value

            setUser({
                ...user,
                [name]:value,
        })

        }

        const handlesubmit =async(e)=>{
            e.preventDefault()
            const res = await fetch("/attire/login",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    email:user.email,
                    password:user.password
                })
            })
            const data = await res.json()
            if(res.status === 200){
                alert("Successfully logged in")
                setTokeninLs(data.token)
                navigate('/')
            }
        }
    


    return (
        <Wrapper>

            <section>
                <div className="sign_container">
                    {/* <div className="sign_header">
                        <img src="/images/logo.png" alt="signupimg" />
                    </div> */}
                    <div className="sign_form">
                        <form onSubmit={handlesubmit} >
                            <h1>Sign-In</h1>

                            <div className="form_data">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email"
                                    onChange={handleInput}
                                    value={user.email}
                                    id="email" />
                            </div>
                            <div className="form_data">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password"
                                    onChange={handleInput}
                                    value={user.password}
                                    id="password" placeholder="At least 6 characters" />
                            </div>
                            <button className="signin_btn">Continue</button>
                        </form>

                    </div>
                    <div className="create_accountinfo">
                        <p>New to ATTIRE?</p>
                        <button>  <NavLink to="/signup">Create your Attire Account</NavLink></button>
                    </div>
                </div>

            </section>


        </Wrapper>
    )
}
const Wrapper = styled.section`
section {
    // position: relative;
    width: 100%;
    top: 60px;
    min-height: 100vh;
}

.sign_container {
    width: 85%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.sign_header img {
    width: 92px;
    margin-top: -40px;
    cursor: pointer;
}

.sign_form {
    border: 1px solid #c9c9c9;
    padding: 10px 30px;
    margin-top: 50px;
    border-radius: 5px;
}

.sign_form h1 {
    font-weight: 500;
    font-size: 27px;
    margin: 10px 0;
}

.sign_form label {
    font-size: 13px;
    font-weight: 700;
    margin-bottom: 1px;
}

.sign_form input {
    width: 100%;
    height: 31px;
    padding: 3px 7px;
    border-radius: 3px;
    outline: none;
    border: 1px solid #a6a6a6;
    margin-bottom: 10px;
    margin-top: 1px;
}

.sign_form .signin_btn {
    margin-top: 7px;
    margin-bottom: 23px;
    width: 100%;
    background: #f3d078;
    cursor: pointer;
    border: 1px solid #9c7e31;
    height: 29px;
    outline: none;
    border-radius: 3px;
    color: #111;
    background: linear-gradient(to bottom, #f7dfa5, #f0c14b)
}

.sign_form input:focus {
    box-shadow: 0 0 5px 0px #ffbc2c;
}

.sign_form .signin_info {
    margin-top: 23px;
    display: flex;
    margin-bottom: 10px;
}

.sign_form .signin_info p {
    font-size: 13px;
    font-weight: 600;
    color: #222;
}


.sign_form .signin_info a {
    font-size: 13px;
    letter-spacing: .5px;
    margin-left: 5px;
    color: #0066c0;
    text-decoration: none;
    font-weight: 600;
}


/* for login page */
.create_accountinfo p {
    font-size: 12px;
    text-align: center;
    color: #767676;
    margin-top: 20px;
    font-weight: 600;
}

.create_accountinfo button {
    background: linear-gradient(to bottom, #f7f8fa, #e7e9ec);
    height: 29px;
    width: 300px;
    border-radius: 3px;
    border: 1px solid #adb1b8;
    outline: none;
    margin-top: 15px;
}

.create_accountinfo a {
    text-decoration: none;
    color: #111;
    padding: 10px 35px;
    letter-spacing: .5px;
}
`

export default Login