import React from 'react';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import withBaseUrl from '@docusaurus/withBaseUrl';
import Toggle from '@theme/Toggle';
import Footer from '@theme/Footer';
import './styles.css';

function BlogLayout(props) {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const {baseUrl, ogImage, favicon, tagline, themeConfig = {}, title: defaultTitle} = siteConfig;
  const {children, title, isBlogListPage, description} = props;

  const { author, authorImageURL, authorURL} = themeConfig;

  const renderBio = () => {
    return (
      <div className="avatar">
        {authorImageURL && (
          <a
            className="avatar__photo-link"
            href={authorURL}
            target="_blank"
            rel="noreferrer noopener">
            <img
              className="avatar__photo avatar__photo--lg"
              src={authorImageURL}
              alt={author}
            />
          </a>
        )}
        <div className="avatar__intro">
          {author && (
            <>
              <h4 className="avatar__name">{author}</h4>
              <small className="avatar__subtitle">{tagline}</small>
            </>
          )}
        </div>
      </div>
    );
  };

  const renderHeader = () => {
    if (isBlogListPage) {
      return <h1>{defaultTitle}</h1>;
    } else {
      return (
        <h3>
          <Link to={baseUrl}>{defaultTitle}</Link>
        </h3>
      );
    }
  };

  return (
    <React.Fragment>
      <Head defaultTitle={`${defaultTitle} · ${tagline}`}>
        <html lang="en" />
        {title && <title>{`${title} · ${tagline}`}</title>}
        {favicon && <link rel="shortcut icon" href={withBaseUrl(favicon)} />}
        {description && <meta name="description" content={description} />}
        {description && (
          <meta property="og:description" content={description} />
        )}
        {/* todo: use og image instead of favicon */}
        {favicon && <meta property="og:image" content={withBaseUrl(favicon)} />}
      </Head>
      <div className="container">
        <div className="row">
          <div className="blogHeader">
            {renderHeader()}
            <Toggle />
          </div>
          {isBlogListPage && <div className="blogHeader">{renderBio()}</div>}
        </div>
      </div>
      {children}
      <Footer />
    </React.Fragment>
  );
}

export default BlogLayout;
