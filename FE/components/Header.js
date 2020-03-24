import Link from 'next/link';
import Login from './Login';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/test">
      <a style={linkStyle}>test</a>
    </Link>
    <Link href="/forBusinessOwners">
      <a style={linkStyle}>For Business Owners</a>
    </Link>
    <Login href="/account"/>
  </div>
);

export default Header;