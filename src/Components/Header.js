import React from 'react';

function Header(props) {

  return (
      <img
        onClick = {props.setDisplay}
        src = {props.proptimusLogo}
        alt = "logo"
      />
  );
}

export default Header;
