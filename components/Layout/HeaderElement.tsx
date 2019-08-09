interface Props {
  name: string;
  path?: string;
  active?: boolean;
}

const HeaderElement = ({ name, active }: Props): JSX.Element => (
  <li className="link inline-block mr2">
    <a
      href="/"
      className="text-decoration-none"
      style={{
        borderBottom: active ? '1px solid' : 'none',
        color: 'white',
      }}
    >
      {name}
    </a>
  </li>
);

export default HeaderElement;
