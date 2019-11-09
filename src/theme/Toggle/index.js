import React, {useCallback} from 'react';
import Toggle from 'react-toggle';
import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useTheme from '@theme/hooks/useTheme';

import './styles.css';

export default function() {
  const [theme, setTheme] = useTheme();

  const onToggleChange = useCallback(
    e => setTheme(e.target.checked ? 'dark' : ''),
    [setTheme],
  );

  return (
    <React.Fragment>
      <Head>
        <html lang="en" data-theme={theme} />
      </Head>
      <Toggle
        aria-label={'theme toggle'}
        icons={{
          checked: (
            <img
              src={useBaseUrl(`img/moon.png`)}
              width="16"
              height="16"
              role="presentation"
              style={{pointerEvents: 'none'}}
            />
          ),
          unchecked: (
            <img
              src={useBaseUrl(`img/sun.png`)}
              width="16"
              height="16"
              role="presentation"
              style={{pointerEvents: 'none'}}
            />
          ),
        }}
        checked={theme === 'dark'}
        onChange={onToggleChange}
      />
    </React.Fragment>
  );
}
