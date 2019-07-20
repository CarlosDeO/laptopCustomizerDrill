import React, { Component } from 'react';
import './Options.css';

export default class Options extends Component{
    render() {
        const item = this.props.item;
        const index = this.props.index;
        const key = this.props.keyFeature
        const selectedClass = this.props.item.name === this.props.selected[key].name ? 'feature__selected' : '';
            const featureClass = 'feature__option ' + selectedClass;
            return (
            <li key={index} className="feature__item">
              <div className={featureClass}
                
                onClick={e => this.props.updateFeature(key, item)}>
                  { item.name }
                  ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                    .format(item.cost) })
              </div>
            </li>
            );
    }
}