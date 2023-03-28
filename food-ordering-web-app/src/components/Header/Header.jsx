import React, { useRef, useEffect } from "react";

import { Container } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";

import "../../styles/header.css";

const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Foods",
    path: "/foods",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h5>Tasty Treat</h5>
          </div>

          {/* Menu */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="me  nu d-flex align-items-center gap-5">
              {/* {nav__links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))} */}

              {/* For Protected Routing */}

              {localStorage.getItem("user") ? (
                <>
                  <NavLink
                    to="/home"
                    className={(navClass) =>
                      navClass.isActive ? "active__menu" : ""
                    }
                  >
                    Home
                  </NavLink>

                  <NavLink
                    to="/foods"
                    className={(navClass) =>
                      navClass.isActive ? "active__menu" : ""
                    }
                  >
                    Foods
                  </NavLink>

                  <NavLink
                    to="/cart"
                    className={(navClass) =>
                      navClass.isActive ? "active__menu" : ""
                    }
                  >
                    Cart
                  </NavLink>

                  <NavLink
                    to="/contact"
                    className={(navClass) =>
                      navClass.isActive ? "active__menu" : ""
                    }
                  >
                    Contact
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink
                    to="/"
                    className={(navClass) =>
                      navClass.isActive ? "active__menu" : ""
                    }
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/register"
                    className={(navClass) =>
                      navClass.isActive ? "active__menu" : ""
                    }
                  >
                    Register
                  </NavLink>
                </>
              )}
            </div>
          </div>

          {/* Nav Icons Home Food Contact Cart icon*/}
          <div className="nav__right d-flex align-items-center gap-4">
            <span className="cart__icon" onClick={toggleCart}>
              <i className="ri-shopping-basket-line"></i>
              <span className="cart__badge">{totalQuantity}</span>
            </span>

            <span className="user">
              <Link to="/">
                <i className="ri-user-line"></i>
              </Link>
            </span>

            <span className="mobile__menu" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
