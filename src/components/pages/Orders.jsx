import { useContext, useEffect, useState } from "react";
import SmallHeader from "../ui/SmallHeader";
import ProductOrder from "../ui/ProductOrder";
import { AuthContext } from "../../context/AuthContext";
import useRedirect from "../../utils/hooks/useRedirect";
import useScrollToTop from "../../utils/hooks/useScrollToTop";

export default function Orders() {
  useRedirect();
  useScrollToTop();
  const [orderData, setOrderData] = useState([]);
  const { userData, isAuthenticated, accessToken, uri } =
    useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated) {
      const fetchOrders = async () => {
        try {
          const response = await fetch(`${uri}/orders/${userData?._id}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
            credentials: "include",
          });

          if (!response.ok) {
            const errData = await response.json();
            const errMsg = errData.error || errData.statusText();
            throw new Error(errMsg);
          }
          const data = await response.json();
          console.log(data);

          setOrderData(data);
        } catch (error) {
          console.error(error.message);
        }
      };

      fetchOrders();
    }
  }, [userData, isAuthenticated, accessToken]);

  return (
    <main
      className="contact pt-48 pb-20 sm:py-20 lg:py-16"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div className="container mx-auto flex flex-col gap-20">
        <SmallHeader headers={["Home", "Orders"]}></SmallHeader>

        <section id="orders-container" className="flex flex-col gap-10 w-full">
          {orderData.orders &&
            orderData.orders
              .sort((a, b) => new Date(b.order_date) - new Date(a.order_date))
              .map((order) => (
                <ProductOrder key={order._id} orderDetails={order} />
              ))}
        </section>
      </div>
    </main>
  );
}
