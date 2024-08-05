export default function AddToCartBtn({hovered}) {
  const btnClass = `${hovered ? 'bottom-0' : '-bottom-10'} absolute left-0 right-0 py-2 bg-black font-semibold text-white rounded-bl-md rounded-br-md duration-200 hover:bg-primaryRed`

  return (
    <button className={btnClass}>Add To Cart</button>
  )
}