import { FixedSizeList as List } from 'react-window';

const Row = ({ index, style }) => (
  <div style={style}>Row {index}</div>
);

const MyList = () => (
  <List
    height={600}
    itemCount={1000}
    itemSize={35}
    width={300}
  >
    {Row}
  </List>
);
export default MyList;