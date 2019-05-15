import React, {useState, useEffect} from 'react';
import Toggle from 'react-toggle';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import './styles.css';

export default function(props) {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const {baseUrl} = siteConfig;
  const currentTheme =
    typeof document !== 'undefined'
      ? document.querySelector('html').getAttribute('data-theme')
      : '';
  const [theme, setTheme] = useState(currentTheme);

  useEffect(() => {
    try {
      const localStorageTheme = localStorage.getItem('theme');
      setTheme(localStorageTheme);
    } catch (err) {}
  }, []);

  return (
    <React.Fragment>
      <Head>
        <html data-theme={theme} />
      </Head>
      <Toggle
        icons={{
          checked: (
            <img
              src={`${baseUrl}img/moon.png`}
              width="16"
              height="16"
              role="presentation"
              style={{pointerEvents: 'none'}}
            />
          ),
          unchecked: (
            <img
              src={`${baseUrl}img/sun.png`}
              width="16"
              height="16"
              role="presentation"
              style={{pointerEvents: 'none'}}
            />
          ),
        }}
        checked={theme === 'dark'}
        onChange={e => {
          const nextTheme = e.target.checked ? 'dark' : '';
          setTheme(nextTheme);
          try {
            localStorage.setItem('theme', nextTheme);
          } catch (err) {}
        }}
      />
    </React.Fragment>
  );
}
