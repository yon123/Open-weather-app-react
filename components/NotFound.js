import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NotFoundHed = styled.h1`
  text-align: center;
  font-size: 32px;
`;

const NotFoundSubHed = styled.h2`
  text-align: center;
`;

const ImageWrap = styled.div`
  text-align: center;
`;

const NotFoundLink = styled(Link)`
  text-decoration: none;
  color: #717171;
  font-size: 22px;
  font-weight: bold;
`;

const NotFound = () => {
  return (
    <React.Fragment>
      <NotFoundHed>Ooops....</NotFoundHed>
      <NotFoundSubHed>Looks like we dont have this page.</NotFoundSubHed>
      <ImageWrap>
        <img
          alt="prop"
          src="https://media.giphy.com/media/aMXDRrpFFMF2M/giphy.gif"
        />
      </ImageWrap>
      <NotFoundSubHed>
        Head back to our <NotFoundLink to="/">Homepage</NotFoundLink>
      </NotFoundSubHed>
    </React.Fragment>
  );
};

export default NotFound;
