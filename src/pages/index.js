import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'What is Netkit?',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Netkit is a project for creating virtual network devices (routers, switches, servers etc)
        which can be connected to form a full network on a single host machine. This can be useful
        for running network related experiments or for education. Netkit machines are usermode linux
        instances which are lightweight and do not require root access to run. To get started have
        a look at the <a href='docs'>Install Guide</a>.
      </>
    ),
  },
  {
    title: 'Development of netkit-jh',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        We have guides on getting started with development and how to contribute
        to the netkit projects on github.
      </>
    ),
  },
  {
    title: 'Netkit Alternatives',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        <a href='https://www.kathara.org/'>Kathara</a> is an alternative to netkit
        which uses docker containers rather than Usermode Linux instances for 'virtualised'
        network devices. This project is maintained by the original developers of the
        netkit project.
        <br/>
        We recommend that unless you have a requirement for Usermode Linux, you
        should look at Kathara before attempting to use netkit-jh. Additionally,
        the original <a href='https://www.netkit.org/'>netkit</a> and
        <a href='https://netkit-ng.github.io/'> netkit-ng</a> projects contain
        earlier filesystems and kernels than those of netkit-jh.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={``}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
