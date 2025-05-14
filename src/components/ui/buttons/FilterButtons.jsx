import { Link } from 'react-router-dom';

export default function FIlterButton({ filterBy }) {
  const filterName = filterBy.split('=')[1];

  return (
    <Link to={`/products/${filterBy}`} className="filter-btn font-medium h-text-red">{filterName}</Link>
  );
}
