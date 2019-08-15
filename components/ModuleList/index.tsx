import { Module } from '../../types/Module';

import ModuleCard from './ModuleCard';

interface Props {
  modules: Module[];
}

const ModuleList = ({ modules }: Props): JSX.Element => (
  <>
    {
      modules.map((module): JSX.Element => (
        <div className="mt3 mb3" key={module.id}>
          <ModuleCard module={module} />
        </div>
      ))
    }
  </>
);

export default ModuleList;
