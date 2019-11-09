import React from 'react';
import {MDXProvider} from '@mdx-js/react';
import MDXComponents from '@theme/MDXComponents';
import Link from '@docusaurus/Link';

function BlogPostItem(props) {
  const {children, frontMatter, metadata, truncated} = props;
  const {date, permalink, tags} = metadata;
  const {author, authorURL, authorTitle, authorFBID, title} = frontMatter;

  const renderPostHeader = () => {
    const match = date.substring(0, 10).split('-');
    const year = match[0];
    const month = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ][parseInt(match[1], 10) - 1];
    const day = parseInt(match[2], 10);

    const authorImageURL = authorFBID
      ? `https://graph.facebook.com/${authorFBID}/picture/?height=200&width=200`
      : frontMatter.authorImageURL;

    return (
      <header>
        <h1>
          <Link to={permalink}>{title}</Link>
        </h1>
        <div className="margin-bottom--sm">
          <small>
            {month} {day}, {year}
          </small>
        </div>
        {!truncated && (
          <div className="avatar margin-bottom--md">
            {authorImageURL && (
              <a
                className="avatar__photo-link"
                href={authorURL}
                target="_blank"
                rel="noreferrer noopener">
                <img
                  className="avatar__photo"
                  src={authorImageURL}
                  alt={author}
                />
              </a>
            )}
            <div className="avatar__intro">
              {author && (
                <>
                  <h4 className="avatar__name">
                    <a
                      href={authorURL}
                      target="_blank"
                      rel="noreferrer noopener">
                      {author}
                    </a>
                  </h4>
                  <small className="avatar__subtitle">{authorTitle}</small>
                </>
              )}
            </div>
          </div>
        )}
      </header>
    );
  };

  return (
    <div>
      {renderPostHeader()}
      <article className="markdown">
        <MDXProvider components={MDXComponents}>{children}</MDXProvider>
      </article>
      <div className="row margin-vert--sm">
        <div className="col col-6">
          {tags.length > 0 && (
            <>
              <strong>Tags:</strong>
              {tags.map(({label, permalink: tagPermalink}) => (
                <Link
                  key={tagPermalink}
                  className="margin-horiz--sm"
                  to={tagPermalink}>
                  {label}
                </Link>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default BlogPostItem;
