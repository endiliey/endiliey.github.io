import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col col--6 col--offset-3">
            <div style={{float: 'right'}}>
              <a href="https://docusaurus-2.netlify.com/" target="_blank" rel="noopener noreferrer">
                docusaurus 2
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
