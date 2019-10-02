import React, { Component } from 'react';

import './ContentSection.scss';
import Card from '../Card/Card';

export default class ContentSection extends Component {
  tabsNav = () => (
    <h1>ViCtor</h1>
  );

  render() {
    return (
      <section className="section section__content">
        <Card
          title="Messages"
          navBlock={this.tabsNav()}
        >
          <h2>oooo</h2>
        </Card>
        <div className="section__content__sidebar">
          <Card
            title="User project"
            navBlock={this.tabsNav()}
          >
            <h2>oooo</h2>
          </Card>
          <Card
            title="Small todo list"
            navBlock={this.tabsNav()}
          >
            <h2>oooo</h2>
          </Card>
          <div className="section__content__sidebar--full-width">
            <Card
              title="Transaction worldwide"
              navBlock={this.tabsNav()}
            >
              <h2>oooo</h2>
            </Card>
          </div>/
        </div>
      </section>
    );
  }
}
