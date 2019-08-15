import Footer from './Footer';
import Header from './Header';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props): JSX.Element => (
  <>
    <div className="fixed top-0 left-0 right-0">
      <Header />
    </div>

    <div className="max-width-3 mx-auto pt3 p1">
      <div className="mt3" />

      { children }

      <div className="mt4 mb3">
        <Footer />
      </div>
    </div>
  </>
);

export default Layout;
