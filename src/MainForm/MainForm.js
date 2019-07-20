import React, { Component } from 'react';
import './MainForm.css';
import Features from '../Features/Features';

class MainForm extends React.Component {
    render() {
        const features = Object.keys(this.props.features)
        .map(keyFeature => {
            return (
                <section className="main__form">
                <Features 
                 keyFeature={keyFeature}
                 selected={this.props.selected}
                 features={this.props.features}
                 updateFeature={this.props.updateFeature}/>
                 </section>
            )
        })
        return (
            
                <section className="main__form">
                <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
                {features}
                </section>
            
        )
    }
}

export default MainForm;