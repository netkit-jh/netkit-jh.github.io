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
    imageUrl: 'img/undraw_network.svg',
    description: (
      <>
        Netkit is a project for creating virtual network devices (routers, switches, servers etc)
        which can be connected to form a full network on a single host machine. This can be useful
        for running network related experiments or for education. Netkit machines are User-mode Linux
        instances which are lightweight and do not require root access to run. To get started have
        a look at the <a href='docs'>Install Guide</a>.
        <br/>
        <br/>
        Netkit-JH is a fork of the Netkit-NG project, which is a fork of the original Netkit project. The Netkit-JH fork aimed to update Netkit-NG which stopped development in 2014 and sought to use a modern Debian distribution and kernel.
      </>
    ),
  },
  {
    title: 'Development of Netkit-JH',
    imageUrl: 'img/undraw_dev.svg',
    description: (
      <>
        We have guides on getting started with development and how to contribute
        to the Netkit project on Github.
      </>
    ),
  },
  {
    title: 'Netkit Alternatives',
    imageUrl: 'img/undraw_container.svg',
    description: (
      <>
        <a href='https://www.kathara.org/'>Kathara</a> is an alternative to netkit
        which uses Docker containers rather than User-mode Linux instances for 'virtualised'
        network devices. This project is maintained by the original developers of the
        Netkit project.
        <br/>
        <br/>
        We recommend that unless you have a requirement for User-mode Linux, you
        should look at Kathara before attempting to use Netkit-JH. Additionally,
        the original <a href='https://www.netkit.org/'>Netkit</a> and
        <a href='https://netkit-ng.github.io/'> Netkit-NG</a> projects contain
        earlier filesystems and kernels than those of Netkit-JH.
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
      description="Documentation for using and developing netkit-jh.">
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
