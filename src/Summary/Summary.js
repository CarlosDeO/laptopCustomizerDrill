import React, { Component } from 'react';
import SummaryItems from '../SummaryItems/SummaryItems';
import SummaryTotal from '../SummaryTotal/SummaryTotal'
import './Summary.css';

export default class Summary extends Component {
    render() {
        const Summary = Object.keys(this.props.features)
        .map(keyFeature => <SummaryItems 
            keyFeature={keyFeature}
            selected={this.props.selected} 
            />)
        return (
            <section className="main__summary">
            <h3>NEW GREENLEAF 2018</h3>
            {Summary}
            <SummaryTotal selected={this.props.selected} />
            </section>
        )
    }
}