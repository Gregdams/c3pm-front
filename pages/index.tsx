import Layout from '../components/Layout/Layout';
import ModuleCard from '../components/ModuleCard/ModuleCard';
import { Module } from '../types/Module';


const exampleModule: Module = {
  name: 'Hana',
  author: 'The Boost Team',
  description: 'Hana is your standard metaprogramming library for C++.' +
    ' Still, use at your own risk.',
};

const Index = (): JSX.Element => (
  <Layout>
    <p className="h3 m0 mt1 mb3">4 matching modules</p>

    <div className="mt2" />
    <ModuleCard module={exampleModule} />

    <div className="mt2" />
    <ModuleCard module={exampleModule} />

    <div className="mt2" />
    <ModuleCard module={exampleModule} />

    <div className="mt2" />
    <ModuleCard module={exampleModule} />
  </Layout>
);

export default Index;
