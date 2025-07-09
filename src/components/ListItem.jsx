function ListItem({ item }) {
  return (
    <li className="card">
      <img src={item.thumbnail} alt={item.title} />
      <h3>{item.title}</h3>
      <p><strong>Brand:</strong> {item.brand}</p>
      <p><strong>Price:</strong> ${item.price}</p>
      <p><strong>Rating:</strong> {item.rating} </p>
      <p><strong>Availability:</strong> {item.availabilityStatus}</p>
      <p><strong>In Stock:</strong> {item.stock} pcs</p>
    </li>
  );
}

export default ListItem;
