import { PATHS } from '../../../constants/Paths';

import HeaderElement from './Element';

const Header = (): JSX.Element => (
  <div className="p2 white bg-black stylish-box">
    <div className="max-width-3 mx-auto">
      <div className="left">
        <HeaderElement to="/" name="c3pm" />
      </div>

      <ul className="list-reset m0 right-align">
        <HeaderElement to={PATHS.MODULES} name="Modules" />
        <HeaderElement to={PATHS.GET_STARTED} name="Get Started" />
        <HeaderElement to={PATHS.DOCUMENTATION} name="Documentation" last />
      </ul>
    </div>
  </div>
);

export default Header;
