import { useParams } from 'react-router-dom';

function ItemDetailsPage() {
  const { itemId } = useParams();

  return (
    <section>
      <h1>Item Details</h1>
      <p>Details for item ID: {itemId}</p>
    </section>
  );
}

export default ItemDetailsPage;