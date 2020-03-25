import Header from './Header';
import Head from 'next/head';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const Layout = props => (
  <div style={layoutStyle}>
    <Head>
        <script
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDELF0plHfFSzpmbFz8GEAUl5j_KNKAxSM&libraries=places" key="viewport">
        </script>
      </Head>
    <Header />
    {props.children}
  </div>
);

export default Layout;