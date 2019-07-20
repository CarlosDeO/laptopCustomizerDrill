import React, { Component } from 'react';
import './SummaryItems.css'


export default class SummaryItem extends Component {
    render() {
        const key = this.props.keyFeature;
        const itemName = this.props.selected[key].name
        const itemCost = this.props.selected[key].cost
        return (
            <div className="summary__option" key={key}>
            <div className="summary__option__label">{key}</div>
            <div className="summary__option__value">{itemName}</div>
            <div className="summary__option__cost">
            { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                  .format(itemCost) }
            </div>
            </div>
        )
    }
}