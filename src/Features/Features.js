import React from 'react';
import './Features.css';
import Options from '../Options/Options';


class Features extends React.Component {
    render() {
        const key = this.props.keyFeature
        const options = this.props.features[key].map((item, index) => {
            return (
                <Options item={item} index={index} {...this.props}/>
            )
        })
          return (
          <div className="feature" key={key}>
            <div className="feature__name">{key}</div>
            <ul className="feature__list">
              { options }
            </ul>
          </div>
          )
    }
}

Features.defaultProps = {
    features: {}
  };
  

export default Features;