import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import dayjs from "dayjs";

export default function OrderProduct({ details, orderDate }) {
  const { products } = useContext(ProductContext)
  const matchingProduct = products.find(product => details.productId === product._id);
  
  return (
    <div className="px-10 flex flex-col sm:flex-row items-center w-full gap-10 py-10">
      <div className="h-full w-32">
        <img
          src={`https://exclusive-api.onrender.com/image/${matchingProduct.images[0]}`}
          alt=""
          className="h-full w-full"
        />
      </div>

      <div className="flex flex-col gap-2">
        <p>{matchingProduct.name}</p>
        <p>Arriving on: {dayjs(orderDate).add(3, 'days').format('MMMM DD YYYY')}</p>
        <p>Quantity: {details.quantity}</p>
      </div>

      <aside className="flex flex-col gap-2 w-full sm:w-auto sm:ml-auto">
        <button className="border rounded-lg px-10 py-3 border-primaryRed">
          Track Package
        </button>
        <button className="border rounded-lg px-10 py-3 bg-primaryRed text-light">
          Buy Again
        </button>
      </aside>
    </div>
  );
}
