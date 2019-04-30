import './styles.css';

import React, {useState, useEffect} from 'react';
import Toggle from 'react-toggle';
import Head from '@docusaurus/Head';

export default function(props) {
  const [theme, setTheme] = useState('');
  useEffect(() => {
    if (typeof document !== 'undefined') {
      setTheme(document.querySelector('html').getAttribute('data-theme'));
    }
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
              src={'/img/moon.png'}
              width="16"
              height="16"
              role="presentation"
              style={{pointerEvents: 'none'}}
            />
          ),
          unchecked: (
            <img
              src={'/img/sun.png'}
              width="16"
              height="16"
              role="presentation"
              style={{pointerEvents: 'none'}}
            />
          ),
        }}
        checked={theme === 'dark'} // TODO
        onChange={e => {
          setTheme(e.target.checked ? 'dark' : '');
        }}
      />
    </React.Fragment>
  );
}
