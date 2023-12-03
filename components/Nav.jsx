import Link from 'next/link';

const links = [
  {
    path: '/',
    pathname: 'Home',
  },
  {
    path: '/',
    pathname: 'Find Hotel',
  },
  {
    path: '/',
    pathname: 'About Us',
  },
  {
    path: '/',
    pathname: 'Contact Us',
  },
];

const Nav = ({ containerStyles, listStyles }) => {
  return (
    <nav className={`${containerStyles}`}>
      <ul className={`${listStyles}`}>
        {links.map((link, index) => {
          return (
            <li>
              <Link href={link.path}>{link.pathname}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
