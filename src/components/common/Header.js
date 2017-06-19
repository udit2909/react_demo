import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';

const Header = (props) => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">
        Home
      </IndexLink>
      {" | "}
      <Link to="about" activeClassName="active">
        About
      </Link>
      {" | "}
      <Link to="courses" activeClassName="active">
        Courses
      </Link>
      {props.loading && <LoadingDots interval={100} dots={20}/>}
    </nav>
  );
}

export default Header;
