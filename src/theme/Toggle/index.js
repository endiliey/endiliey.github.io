import React, {useCallback} from 'react';
import Toggle from 'react-toggle';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useTheme from '@theme/hooks/useTheme';

import './styles.css';

export default function() {
  const [theme, setTheme] = useTheme();
  const {isClient} = useDocusaurusContext();

  const onToggleChange = useCallback(
    e => setTheme(e.target.checked ? 'dark' : ''),
    [setTheme],
  );

  return (
    <Toggle
      disabled={!isClient}
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
  );
}
