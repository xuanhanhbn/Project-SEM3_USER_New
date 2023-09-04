import React, { ReactNode } from "react";
import logo from "assets/images/logo/logo.png";
import { Divider } from "antd";
import { Link } from "react-router-dom";

const HeaderLogin = () => {
  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <Link to='/'>

          <img src={logo} alt="" style={{ width: 80, height: 80 }}  />
          </Link>

          <Divider
            type="vertical"
            style={{ backgroundColor: "#ccc", height: 40 }}
          />
        </div>
        <div className="d-flex align-items-center">
          <div >
            <Link style={{color: "#e83e8c"}} to='/login'>Login</Link>
          </div>
          <div className="mx-2">Or</div>
          <div >
            <Link style={{color: "#e83e8c"}} to='/signup'>Register</Link>
          </div>
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default HeaderLogin;
