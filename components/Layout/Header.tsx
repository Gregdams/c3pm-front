import HeaderElement from './HeaderElement';

const Header = (): JSX.Element => (
  <>
    <div className="p2 white bg-black stylish-box">
      <div className="left">
        <HeaderElement name="c3pm" />
      </div>

      <ul className="list-reset m0 right-align">
        <HeaderElement name="Modules" active />
        <HeaderElement name="Get Started" />
        <HeaderElement name="Contribute" />
      </ul>
    </div>
  </>
);

export default Header;
