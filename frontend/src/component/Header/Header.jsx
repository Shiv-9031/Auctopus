import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { menu_data } from "./menu-list";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../Redux/feature/Slice.jsx";
import ListIcon from "@mui/icons-material/List";

export const Header = ({ children }) => {
  const [loguser, setLoguser] = useState("");
  const navigate = useNavigate();
  const user = useSelector((state) => state.BackendData.info);
  const isAuthenticated = useSelector(
    (state) => state.BackendData.isAuthenticated
  );
  const dispatch = useDispatch();

  const Logout = () => {
    dispatch(logout());
    navigate("/login");
  };

  useEffect(() => {
    if (user.success) {
      setLoguser(user.data);
    }
  }, []);

  return (
    <div className="page-content">
      <div className="header-main">
        <div className="header-logo">
          <Link to="/">Logo</Link>
        </div>
        <div className="search-bar"></div>
        <div className="header-item-list">
          <ul>
            <li className="header-item">
              <Link to="/">Home</Link>
            </li>

            {!isAuthenticated ? (
              menu_data.map((data, index) => {
                return (
                  <li className="header-item" key={index}>
                    <Link to={data.link}>{data.element}</Link>
                  </li>
                );
              })
            ) : (
              <>
                <li className="header-item">
                  <Link to="/orders">Orders</Link>
                </li>
                <li className="header-item">
                  <Link to="/">{loguser.name}</Link>
                </li>

                <li className="header-item">
                  <a
                    href="https://github.com/Shiv-9031/SciAstra/tree/master"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Project Link
                  </a>
                </li>
                <li className="header-item">
                  <button onClick={Logout}>Logout</button>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="header-toggle">
          <ListIcon
            className="header-icon"
            style={{ fontSize: "45px", color: "#ffff" }}
          />
        </div>
      </div>
      {/*-------------------- main body---------------- */}

      {children}
    </div>
  );
};
