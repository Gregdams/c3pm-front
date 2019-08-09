import { Module } from '../../types/Module';


interface Props {
  module: Module;
}

const ModuleCard = ({ module }: Props): JSX.Element => (
  <div className="p2 bg-white stylish-box">
    <p className="h3 bold m0">{ module.name }</p>
    <p className="italic m0 mt1" style={{ fontSize: '14px' }}>
      Authored by <a href="/">{ module.author }</a>
    </p>

    <p className="m0 mt3">{ module.description }</p>
  </div>
);

export default ModuleCard;
