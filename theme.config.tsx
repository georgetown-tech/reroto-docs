import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Logo from "./logo.svg";

const config: DocsThemeConfig = {
  logo: <Logo />,
  project: {
    link: 'https://github.com/georgetown-tech/reroto-docs',
  },
  // chat: {
  //   link: 'https://discord.com',
  // },
  docsRepositoryBase: 'https://github.com/georgetown-tech/reroto-docs',
  footer: {
    text: '© 2023 Georgetown Disruptive Technologies Co.',
  },
}

export default config
