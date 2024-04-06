import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import { useCartContext } from "../context/cart_context";
const { useGlobalProductContext } = require('../context/productContext')

const Nav = () => {
  const { isToken } = useGlobalProductContext();
  const { total_item } = useCartContext();
  const [menuIcon, setMenuIcon] = useState(false);

  const Navbar = styled.nav`
    .navbar-lists {
      display: flex;
      gap: 4.8rem;
      align-items: center;
    }

    .navbar-link {
      text-decoration: none;
      font-size: 1.8rem;
      font-weight: 500;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.black};
      transition: color 0.3s linear;

      &:hover {
        color: ${({ theme }) => theme.colors.helper};
      }
    }

    .mobile-navbar-btn {
      display: none;

      @media (max-width: ${({ theme }) => theme.media.mobile}) {
        display: block;
      }
    }

    .cart-trolley--link {
      position: relative;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.black};

      .cart-trolley {
        font-size: 3.2rem;
      }

      .cart-total--item {
        width: 2.4rem;
        height: 2.4rem;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.colors.helper};
        color: ${({ theme }) => theme.colors.white};
        font-size: 1.4rem;
        position: absolute;
        top: -10%;
        right: -10%;
      }
    }
  `;

  return (
    <Navbar>
      <div className={`navbar ${menuIcon ? "active" : ""}`}>
        <ul className="navbar-lists">
          <li>
            <NavLink to="/" className="navbar-link" onClick={() => setMenuIcon(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="navbar-link" onClick={() => setMenuIcon(false)}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className="navbar-link" onClick={() => setMenuIcon(false)}>
              Contact
            </NavLink>
          </li>
          {
            isToken ? (<> <li>
              <NavLink to="/products" className="navbar-link" onClick={() => setMenuIcon(false)}>
                Products
              </NavLink>
            </li>
              <li>
                <NavLink to="/logout" className="navbar-link" onClick={() => setMenuIcon(false)}>
                  Logout
                </NavLink>
              </li>
              <li>
            <NavLink to="/cart" className="navbar-link cart-trolley--link" onClick={() => setMenuIcon(false)}>
              <FiShoppingCart className="cart-trolley" />
              <span className="cart-total--item">{total_item}</span>
            </NavLink>
          </li>
              
              </>) : (<>  <li>
                <NavLink to="/signup" className="navbar-link" onClick={() => setMenuIcon(false)}>
                  Signup
                </NavLink>
              </li>
                <li>
                  <NavLink to="/login" className="navbar-link" onClick={() => setMenuIcon(false)}>
                    Login
                  </NavLink>
                </li></>)
          }



     
        </ul>

        <div className="mobile-navbar-btn">
          {!menuIcon ? (
            <CgMenu
              name="menu-outline"
              className="mobile-nav-icon"
              onClick={() => setMenuIcon(true)}
            />
          ) : (
            <CgClose
              name="close-outline"
              className="mobile-nav-icon"
              onClick={() => setMenuIcon(false)}
            />
          )}
        </div>
      </div>
    </Navbar>
  );
};

export default Nav;
