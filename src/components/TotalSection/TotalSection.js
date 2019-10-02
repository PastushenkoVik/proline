import React, { Component } from 'react';
import shortid from 'shortid';
import classNames from 'classnames';

import './TotalSection.scss';
import { totalQuantity } from '../../store/data';
import Card from '../Card/Card';

export default class TotalSection extends Component {

  periodLabel = (period, index) => (
    <div
      className={classNames(
        'section__total__label',
        `section__total__label--${index}`
      )}
    >
      {period}
    </div>
  );

  render() {
    return (
      <section className="section section__total">
        {totalQuantity.map((totalQuantityCard, i) => (
          <Card
            key={shortid.generate()}
            title={totalQuantityCard.title}
            navBlock={this.periodLabel(totalQuantityCard.period, i + 1)}
          >
            <div className="section__total__sum">
              {totalQuantityCard.sum}
            </div>
            <div className="section__total__content">
              <div className="section__total__description">
                {totalQuantityCard.description}
              </div>
              <div
                className={classNames(
                  'section__total__percent',
                  `section__total__percent--${i + 1}`
                )}
              >
                {`${totalQuantityCard.percent}%`}
              </div>
            </div>
          </Card>
        ))}
      </section>
    );
  }
}
