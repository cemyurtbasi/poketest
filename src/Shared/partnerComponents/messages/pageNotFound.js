import React, { memo } from "react";
import LogoBlue from "../../../Assets/images/logo/logo-blue.png";
import { Link } from "react-router-dom";
import { Button } from "antd";
import PropTypes from "prop-types";

//<PageNotFound title="" description="" msgCode="" btnClose={true} pageInnerNotFound={true} logoUrl="/"/>

const PageNotFound = memo(
  ({ title, description, msgCode, btnClose, pageInnerNotFound, logoUrl }) => {
    return (
      <div className="pageNotFound">
        {!pageInnerNotFound && (
          <div className="pageNotFound-logo">
            <Link to={logoUrl || "/"}>
              <img src={LogoBlue} alt="logo" title="Ana Sayfa" />
            </Link>
          </div>
        )}
        <div className="pageNotFound-text">
          <div className="pageNotFound-text-container">
            {
              <h1 className="pageNotFound-text-container__title">
                {title || "lbl404Title"}
              </h1>
            }
            <span className="pageNotFound-text-container__description">
              {description || "lbl404Description"}
            </span>
            <span className="pageNotFound-text-container__errCode">
              {msgCode || "404"}
            </span>
            {!btnClose && (
              <Link to="/">
                <Button className="pageNotFound-text-container__button">
                  HomePage
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  }
);

PageNotFound.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  msgCode: PropTypes.string,
  btnClose: PropTypes.bool,
  pageInnerNotFound: PropTypes.bool,
  logoUrl: PropTypes.string,
};

export default PageNotFound;
