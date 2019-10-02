import React from 'react';
import shortid from 'shortid';
import classNames from 'classnames';

import './TotalSection.scss';
import { totalQuantity } from '../../store/data';
import Card from '../Card/Card';

const TotalSection = () => (
  <section className="section section__total">
    {totalQuantity.map((totalQuantityCard, i) => (
      <Card key={shortid.generate()} title={totalQuantityCard.title}>
        <div className={classNames(
          'section__total__label',
          `section__total__label--${i + 1}`
        )}
        >
          {totalQuantityCard.period}
        </div>
      </Card>
    ))}
  </section>
);

export default TotalSection;
