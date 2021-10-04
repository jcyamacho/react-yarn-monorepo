import { FC } from 'react';

export interface HeaderProps {
  title: string
}

const Header: FC<HeaderProps> = ({ title }) => (
  <header>
    <a href="/">{title}</a>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
