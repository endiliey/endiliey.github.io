import React from 'react';
import Search from '@theme/Search';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Toggle from '../Toggle';
import Footer from '../Footer';
import './styles.css';

function BlogLayout(props) {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const {baseUrl, favicon, tagline, algolia} = siteConfig;
  const {children, metadata} = props;
  const {isBlogPage, title} = metadata;

  const renderBio = () => {
    // TODO still hardcoded here
    const authorImageURL = `https://avatars1.githubusercontent.com/u/17883920?s=400&u=0c9bcb0ad70e3ceb7eb10a8116f0a976c46624fa&v=4`;
    const author = 'Endi';
    const authorURL = 'https://github.com/endiliey';
    const authorTitle = 'Maintainer of Docusaurus';
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
    if (isBlogPage) {
      return <h1>{siteConfig.title}</h1>;
    } else {
      return (
        <h3>
          <Link to={baseUrl}>{siteConfig.title}</Link>
        </h3>
      );
    }
  };

  const SearchBar = () => {
    // TODO: for now don't include search bar because its weird
    return null;

    if (!algolia) {
      return null;
    }
    return (
      <div className="search" key="search-box">
        <Search />
      </div>
    );
  };

  return (
    <React.Fragment>
      <Head defaultTitle={siteConfig.title}>
        {metadata.title && <title>{metadata.title}</title>}
        {favicon && <link rel="shortcut icon" href={baseUrl + favicon} />}
      </Head>
      <div className="container">
        <div className="row">
          <div className="blogHeader">
            {renderHeader()}
            <Toggle />
          </div>
          {isBlogPage && (
            <div className="blogHeader">
              {renderBio()}
              <SearchBar />
            </div>
          )}
        </div>
      </div>
      {children}
      <Footer />
    </React.Fragment>
  );
}

export default BlogLayout;
