import React, { Component } from 'react';
import Transformer from '../Components/Transformer'


class TransformersSection extends Component {

 
  renderProptimii = () => {
    return this.props.proptimii.map(transformer => {
    return <Transformer 
    key={transformer.id}
    transformer={transformer}   
    />
    })
  }

  render() {
    return (
      <section className = "transformers-section">
        {this.renderProptimii()}
      </section>
    );
  }
}

export default TransformersSection;
