import ListItem from './ListItem';

function List({ items }) {
  return (
    <ul className="list">
      {items.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default List;
