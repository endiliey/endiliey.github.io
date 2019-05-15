import React from 'react';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Toggle from '@theme/Toggle';
import Footer from '@theme/Footer';
import './styles.css';

function BlogLayout(props) {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const {baseUrl, favicon, tagline, title: defaultTitle} = siteConfig;
  const {children, title, isBlogListPage, description} = props;

  const renderBio = () => {
    const authorImageURL = `https://avatars1.githubusercontent.com/u/17883920?s=400&u=0c9bcb0ad70e3ceb7eb10a8116f0a976c46624fa&v=4`;
    const author = 'Endi';
    const authorURL = 'https://github.com/endiliey';
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
      return <h1>{siteConfig.title}</h1>;
    } else {
      return (
        <h3>
          <Link to={baseUrl}>{siteConfig.title}</Link>
        </h3>
      );
    }
  };

  return (
    <React.Fragment>
      <Head defaultTitle={`${defaultTitle} · ${tagline}`}>
        <html lang="en" />
        {title && <title>{`${title} · ${tagline}`}</title>}
        {favicon && <link rel="shortcut icon" href={baseUrl + favicon} />}
        {description && <meta name="description" content={description} />}
        {description && (
          <meta property="og:description" content={description} />
        )}
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
