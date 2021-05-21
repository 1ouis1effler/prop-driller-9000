import React from 'react';

function Transformer(props) {

  const displayTransformer = () => {
    console.log(props.proptimii)
  }
  return (
    <img
      className = 'transformer'
      src = {props.proptimus.url}
      alt = {props.proptimus.name}
    />
  );
}

export default Transformer;
