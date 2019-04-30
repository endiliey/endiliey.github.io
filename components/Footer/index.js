import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col col--6 col--offset-3">
            <div style={{float: 'right'}}>
              {/* TODO: Generate actual RSS */}
              {false && (
                <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
                  rss
                </a>
              )}
            </div>
            <a
              href="https://mobile.twitter.com/endiliey"
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
            </a>{' '}
            &bull;{' '}
            <a
              href="https://www.quora.com/profile/Endilie-Yacop-Sucipto/"
              target="_blank"
              rel="noopener noreferrer">
              quora
            </a>
          </div>
        </div>
      </div>
      <div className="margin-bottom--xl" />
    </footer>
  );
}

export default Footer;
