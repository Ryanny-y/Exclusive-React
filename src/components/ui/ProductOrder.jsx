import OrderProduct from "./OrderProduct";
import dayjs from 'dayjs';
import { formatCurrency } from '../../utils/currency';

export default function ProductOrder({ orderDetails }) {

  return (
    <div className="border border-primaryGray rounded-md shadow-lg">
      <header className="flex sm:text-nowrap flex-wrap justify-between gap-5 place-items-center bg-lightGray px-5 py-4">
        <p className="flex sm:items-center gap-2">
          <span className="font-semibold text-nowrap">Order Id:</span>
          <span className="break-all">{orderDetails._id}</span>
        </p>
        <p className="flex sm:items-center gap-2">
          <span className="font-semibold text-nowrap">Date Ordered:</span>
          <span className="break-all">{dayjs(orderDetails._order_date).format('MMMM DD, YYYY')}</span>
        </p>
        <p className="flex sm:items-center gap-2">
          <span className="font-semibold text-nowrap">Total:</span>
          <span className="break-all">${formatCurrency(orderDetails.total)}</span>
        </p>
      </header>
      
      {orderDetails.order_items.map(item => <OrderProduct key={item.productId} details={item} orderDate={orderDetails.order_date}/>)}
    </div>
  );
}
