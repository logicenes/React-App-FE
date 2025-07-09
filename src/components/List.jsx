import ListItem from './ListItem';

function List({ items, onDelete }) {
  return (
    <ul className="list">
      {items.map((item) => (
        <ListItem key={item.id} item={item} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default List;
