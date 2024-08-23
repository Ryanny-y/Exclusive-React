import { Link } from 'react-router-dom';

export default function FIltetButton({ filterBy }) {
  const filterName = filterBy.split('=')[1];

  return (
    <Link to={`/Exclusive-React/products/${filterBy}`} className="filter-btn font-medium h-text-red">{filterName}</Link>
  );
}
