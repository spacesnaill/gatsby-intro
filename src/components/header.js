import React from 'react';
import { css } from '@emotion/core';
import NavLink from './NavLink';

const Header = () => (
  <header
    css={css`
      background: #eee;
      border-bottom: 1px solid #ddd;
      display: flex;
      justify-content: space-between;
      padding: 0.5rem; calc((100vw - 550px) / 2);
    `}
  >
    <NavLink to="/">FEM Workshop</NavLink>
    <nav
      css={css`
        margin-top: 0;
      `}
    >
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
    {/** navigation */}
  </header>
);

export default Header;
