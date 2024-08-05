import { Link } from 'react-router-dom'

export default function CategoryBox({category}) {

  return (
    <Link to={category.path} className="py-8 rounded-md border border-secondaryGray hover:border-none hover:bg-primaryRed hover:text-white flex flex-col items-center justify-center text-center duration-200">
      <span className="text-6xl mb-4">{category.icon}</span>
      <h1 className="text-lg">{category.name}</h1>
    </Link>
  )
}