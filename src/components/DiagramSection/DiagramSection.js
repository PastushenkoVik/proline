import React, { Component } from 'react';

import './DiagramSection.scss';
import Card from '../Card/Card';

export default class DiagarmSection extends Component {
  tabsNav = () => (
    <h1>ViCtor</h1>
  );

  render() {
    return (
      <section className="section section__diaram">
        <Card
          title="Orders"
          navBlock={this.tabsNav()}
        >
          <img src="images/diagram.png" alt="diagram" />
        </Card>
      </section>
    );
  }
}
