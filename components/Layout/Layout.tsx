import Header from './Header';
import Footer from './Footer';


interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props): JSX.Element => (
  <div className="max-width-3 mx-auto mt2">
    <Header />
    <div className="mt3" />

    { children }

    <div className="mt4 mb3">
      <Footer />
    </div>
  </div>
);

export default Layout;
