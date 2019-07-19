import React from 'react';
import {useColorMode, jsx} from 'theme-ui';

const colors = ['light', 'dark', 'deep'];

export default function(props) {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <button
      {...props}
      className="button button--outline button--primary"
      sx={{
        appearance: 'none',
        fontFamily: 'inherit',
        fontSize: 1,
        fontWeight: 'bold',
        m: 0,
        px: 2,
        py: 2,
        color: 'text',
        bg: 'muted',
        border: 0,
        borderRadius: 2,
        ':focus': {
          outline: '2px solid',
        },
      }}
      onClick={e => {
        setColorMode(colors[(1 + colors.indexOf(colorMode)) % colors.length]);
      }}>
      {colorMode}
    </button>
  );
}
