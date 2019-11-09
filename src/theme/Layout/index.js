import React from 'react';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Toggle from '@theme/Toggle';
import Footer from '@theme/Footer';
import './styles.css';

function BlogLayout(props) {
  const {siteConfig = {}} = useDocusaurusContext();
  const {
    favicon,
    baseUrl,
    tagline,
    title: defaultTitle,
    url: siteUrl,
    themeConfig,
  } = siteConfig;
  const {
    children,
    title,
    description,
    image,
    keywords,
    isBlogListPage,
    permalink,
  } = props;
  const {author, authorImageURL, authorURL, image: defaultImage} =
    themeConfig || {};
  const metaTitle = title || `${defaultTitle} · ${tagline}`;
  const metaImage = image || defaultImage;
  const metaImageUrl = siteUrl + useBaseUrl(metaImage);
  const faviconUrl = useBaseUrl(favicon);

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
      <Head>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width" />
        {metaTitle && <title>{metaTitle}</title>}
        {metaTitle && <meta property="og:title" content={metaTitle} />}
        {favicon && <link rel="shortcut icon" href={faviconUrl} />}
        {description && <meta name="description" content={description} />}
        {description && (
          <meta property="og:description" content={description} />
        )}
        {keywords && keywords.length && (
          <meta name="keywords" content={keywords.join(',')} />
        )}
        {metaImage && <meta property="og:image" content={metaImageUrl} />}
        {metaImage && <meta property="twitter:image" content={metaImageUrl} />}
        {metaImage && (
          <meta name="twitter:image:alt" content={`Image for ${metaTitle}`} />
        )}
        {permalink && <meta property="og:url" content={siteUrl + permalink} />}
        <meta name="twitter:card" content="summary" />
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
      <main className="main">{children}</main>
      <Footer />
    </React.Fragment>
  );
}

export default BlogLayout;
