import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Africa-First Discovery',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Explore payment integrations using a regional path: region, country,
        provider, and implementation language.
      </>
    ),
  },
  {
    title: 'Structured Catalogue',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Data records are maintained in YAML to support future filtering,
        automation, and an API-ready catalogue.
      </>
    ),
  },
  {
    title: 'Community-Powered',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Contributions can be tagged as <code>official</code> or{' '}
        <code>community</code> to keep source quality transparent.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
