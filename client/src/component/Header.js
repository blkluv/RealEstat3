import React from "react";

// internal import
import { useStateContext } from "../context/";

const Header = (props) => {
  // contract data
  const {userBlance , disconnect, address, contract, connect } =useStateContext();
  return (
    <div className="header-container">
      <div className="navbar-container">
        <div className="navbar-left">
          <h1
            className="burger"
            onClick={() => {
              let nav = document.querySelector(".navbar-links");
              nav.classList.toggle("menu");
            }}
          >
            🪟
          </h1>
          <ul className="navbar-links">
            <li>
              <a href="/home">HOME</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">EXPLORER</a>
            </li>
            <li>
              <a href="#">PAGES</a>
            </li>
            <li>
              <a href="#">CONTACT</a>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          {/* connect wallet */}
          {address ? (
            ""
          ) : (
            <div className="navbar-wallet">
              <button onClick={() => connect()} className="wallet">
                Connect Wallet
              </button>
            </div>
          )}
          {/*end connect wallet  */}

          {/* user settings */}

          {address ? (
            <div>
              <div className="navbar-settings">
                <img
                  src="/favicon.ico"
                  className="settings"
                  onClick={() => {
                    let drop = document.querySelector(".settings-dropdown");
                    drop.classList.toggle("display");
                  }}
                />{" "}
              </div>

              <div className="settings-dropdown">
                <div className="address">
                  <p>User Address : {address.slice(0, 13)}...</p>
                </div>
                <hr />
                <div className="balance">
                  <p>Balance : {userBlance?.slice(0,4)}</p>
                </div>
                <hr />
                <button>Add Your Funds</button>
                <hr />
                <a href="#">My Profile</a>
                <hr />
                <a href="#">Edit Profile</a>
                <hr />
                <a href="#">Manage Funds</a>
                <hr />
                <a href="#" onClick={() => disconnect()}>Disconnect</a>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
