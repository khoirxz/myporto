import React from 'react'
import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'Satoshi';
        src: url('./fonts/Satoshi.ttf') format('truetype');
      }
      `}
  />
)

export default Fonts