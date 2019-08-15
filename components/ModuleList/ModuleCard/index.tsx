import styled from 'styled-components';

import { Module } from '../../../types/Module';

import Tag from './Tag';

interface Props {
  module: Module;
}

const Box = styled.div`
  box-shadow: 0 1px #FFFFFF inset, 0 1px 3px rgba(34, 25, 25, 0.4);
`;

const BigTitle = styled.p`
  font-size: 14px;
`;

const ModuleCard = ({ module }: Props): JSX.Element => (
  <Box className="p2 bg-white">
    <p className="h3 bold m0">{ module.name }</p>
    <BigTitle className="italic m0 mt1">
      Authored by <a href="/">{ module.author }</a>
    </BigTitle>

    <p className="m0 mt3">{ module.description }</p>
    <br />

    <Tag name="templates" />
    <Tag name="metaprogramming" />
    <Tag name="beta" />
  </Box>
);

export default ModuleCard;
