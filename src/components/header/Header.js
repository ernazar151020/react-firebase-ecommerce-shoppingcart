import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./header.scss";
import { useSelector } from "react-redux";
import { auth } from "../../firebase/firebase.utils";
const Header = () => {
  const state = useSelector((state) => state.user.currentUser);
  return (
    <div className="header">
      <Link to="/">
        <Logo className="logo" />
      </Link>
      <div iv className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {state ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
