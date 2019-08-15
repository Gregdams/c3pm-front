import styled from 'styled-components';

const Text = styled.div`
  font-size: 12px;
  padding: 3px 6px;
`;

interface Props {
  name: string;
}

const Tag = ({ name }: Props): JSX.Element => (
  <div className="bg-black white inline-block mr1 mt1">
    <Text>
      { name }
    </Text>
  </div>
);

export default Tag;
