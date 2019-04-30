import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col col--6 col--offset-3">
            <div style={{float: 'right'}}>
              {/* TODO: Generate actual RSS */}
              <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer">
                sitemap
              </a>
            </div>
            <a
              href="https://www.twitter.com/endiliey"
              target="_blank"
              rel="noopener noreferrer">
              twitter
            </a>{' '}
            &bull;{' '}
            <a
              href="https://github.com/endiliey"
              target="_blank"
              rel="noopener noreferrer">
              github
            </a>
          </div>
        </div>
      </div>
      <div className="margin-bottom--xl" />
    </footer>
  );
}

export default Footer;
