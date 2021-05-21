import React, { Component } from 'react';
import Transformer from '../Components/Transformer'


class TransformersSection extends Component {

  changeDisplay = () => {
    if (this.props.display){
       return this.props.proptimii.map(proptimus => {
        return <Transformer proptimus={proptimus} />;
      })
    }
  }

  render() {
    return (
      <section className = "transformers-section">
        {this.changeDisplay()}
      </section>
    );
  }
}

export default TransformersSection;
