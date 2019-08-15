import { useContext } from 'react';
import styled from 'styled-components';

import globalContext from '../../../../contexts/Global';

interface MayBeActiveLinkProps {
  active: boolean;
}

const MayBeActiveLink = styled.a`
  border-bottom: ${(props: MayBeActiveLinkProps): string => (props.active ? '1px solid' : 'none')};
  color: white;
  cursor: pointer;

  &:hover {
    color: white;
  }
`;

interface ElementProps {
  name: string;
  to: string;
  last?: boolean;
}

const Element = ({ last, name, to }: ElementProps): JSX.Element => {
  const global = useContext(globalContext);
  const { activePath } = global;

  return (
    <li className={`link inline-block ${!last && 'mr2'}`}>
      <MayBeActiveLink
        active={activePath === to}
      >
        { name }
      </MayBeActiveLink>
    </li>
  );
};

export default Element;
